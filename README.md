Logic Play/Pause khi cuộn trang

Tầng 1 — cuộn trang
Scroll container có scroll-snap-type: y mandatory, mỗi card con có scroll-snap-align: start và scroll-snap-stop: always. Cái always là quan trọng nhất — không có nó thì cuộn nhanh sẽ nhảy qua 2-3 video cùng lúc.
Tầng này không có logic gì, browser tự xử lý hết.

Tầng 2 — VideoFeed: phát hiện video nào đang trên màn hình
VideoFeed là component cha nó sẽ chứa danh sách các card. Nó tạo một Intersection Observer gắn vào từng card — Observer này do browser chạy, không phải JS của mình, nên không làm nặng main thread. Mỗi khi card nào chiếm đủ 60% màn hình, Observer callback chạy và cập nhật activeIndex trong state.
Observer được tạo trong useEffect vì phải đợi DOM render xong mới có element để gắn vào. Khi component unmount thì cleanup bằng observer.disconnect() để tránh memory leak.
containerRef giữ tham chiếu đến cái div scroll bằng useRef — cần truyền vào Observer làm root để nó quan sát bên trong container thay vì toàn trang. Dùng useRef chứ không phải useState vì chỉ cần cầm DOM element thôi, không cần re-render.

Tầng 3 — VideoCard: nhận lệnh và phát
Mỗi VideoCard nhận isActive từ VideoFeed truyền xuống — chỉ là một boolean. Card không cần biết Observer hay các card khác, chỉ nhìn vào isActive của mình rồi quyết định.
Logic đó nằm trong useEffect với dependency [isActive] — khi isActive đổi thì effect chạy lại, gọi .play() hoặc .pause() trên videoRef. Không gọi thẳng trong render vì render phải pure, DOM API là side effect nên phải đẩy vào useEffect.
videoRef dùng useRef để cầm thẻ <video> thật — vì .play() và .pause() là DOM API , React không wrap những cái này, phải có element thật mới gọi được. Và useRef không gây re-render nên video không bị restart giữa chừng.

Tầng 4 — Click thủ công: override lại trạng thái
Người dùng click vào video thì handleVideoClick chạy — kiểm tra isPlaying rồi toggle. Sau đó hiện icon animation bằng showPauseIcon, dùng timer để tự ẩn sau 700ms. Timer ID lưu vào iconTimerRef bằng useRef — không cần re-render, chỉ cần giữ ID để clearTimeout khi click liên tiếp tránh nhiều timer chạy song song.
handleVideoClick bọc trong useCallback vì được truyền xuống làm prop, tránh tạo function mới mỗi lần render gây re-render không cần thiết.
