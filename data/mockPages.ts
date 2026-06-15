// ─── Explore page data ───────────────────────────────────────────────
export interface TrendingTag {
  tag: string;
  videoCount: string;
  coverColor: string;
}

export interface SuggestedUser {
  id: string;
  name: string;
  handle: string;
  followers: string;
  initial: string;
  color: string;
}

export const trendingTags: TrendingTag[] = [
  { tag: "xuhuong", videoCount: "12.4Tr video", coverColor: "#ff2d55" },
  { tag: "haihuoc", videoCount: "8.1Tr video", coverColor: "#ff6b35" },
  { tag: "cuocsonghanoi", videoCount: "5.6Tr video", coverColor: "#00c896" },
  { tag: "amthuc", videoCount: "9.3Tr video", coverColor: "#f7c948" },
  { tag: "dulich", videoCount: "7.2Tr video", coverColor: "#7c5cfc" },
  { tag: "thethao", videoCount: "4.8Tr video", coverColor: "#00b4d8" },
];

export const suggestedUsers: SuggestedUser[] = [
  { id: "1", name: "Lan Anh Vlog", handle: "@lananvlog", followers: "2.3Tr", initial: "L", color: "#ff2d55" },
  { id: "2", name: "Chef Minh Tú", handle: "@chefminhtu", followers: "1.1Tr", initial: "M", color: "#00c896" },
  { id: "3", name: "Phong Trần Daily", handle: "@phongtran", followers: "890N", initial: "P", color: "#7c5cfc" },
  { id: "4", name: "Du Lịch Cùng Hà", handle: "@dulichha", followers: "560N", initial: "H", color: "#f7c948" },
  { id: "5", name: "Gym & Life", handle: "@gymlife_vn", followers: "430N", initial: "G", color: "#00b4d8" },
];

// ─── Inbox page data ──────────────────────────────────────────────────
export interface Message {
  id: string;
  senderName: string;
  senderInitial: string;
  senderColor: string;
  preview: string;
  time: string;
  unread: number;
  isOnline: boolean;
}

export interface Notification {
  id: string;
  type: "like" | "comment" | "follow" | "mention";
  actorName: string;
  actorInitial: string;
  actorColor: string;
  content: string;
  time: string;
  isRead: boolean;
}

export const mockMessages: Message[] = [
  {
    id: "1", senderName: "Lan Anh Vlog", senderInitial: "L", senderColor: "#ff2d55",
    preview: "Cảm ơn bạn đã follow mình nha! 🥰", time: "2 phút", unread: 2, isOnline: true,
  },
  {
    id: "2", senderName: "Chef Minh Tú", senderInitial: "M", senderColor: "#00c896",
    preview: "Bạn có muốn collab video nấu ăn không?", time: "15 phút", unread: 1, isOnline: true,
  },
  {
    id: "3", senderName: "Phong Trần Daily", senderInitial: "P", senderColor: "#7c5cfc",
    preview: "Mình đã xem video của bạn, rất hay đó!", time: "1 giờ", unread: 0, isOnline: false,
  },
  {
    id: "4", senderName: "Du Lịch Cùng Hà", senderInitial: "H", senderColor: "#f7c948",
    preview: "Địa điểm đó ở đâu vậy bạn ơi?", time: "3 giờ", unread: 0, isOnline: false,
  },
  {
    id: "5", senderName: "Gym & Life", senderInitial: "G", senderColor: "#00b4d8",
    preview: "Bài tập hôm nay siêu đỉnh 💪", time: "Hôm qua", unread: 0, isOnline: false,
  },
];

export const mockNotifications: Notification[] = [
  {
    id: "1", type: "like", actorName: "Lan Anh Vlog", actorInitial: "L", actorColor: "#ff2d55",
    content: "đã thích video của bạn", time: "5 phút", isRead: false,
  },
  {
    id: "2", type: "follow", actorName: "Chef Minh Tú", actorInitial: "M", actorColor: "#00c896",
    content: "đã bắt đầu theo dõi bạn", time: "20 phút", isRead: false,
  },
  {
    id: "3", type: "comment", actorName: "Phong Trần", actorInitial: "P", actorColor: "#7c5cfc",
    content: 'đã bình luận: "Cực kỳ hay luôn! 🔥"', time: "1 giờ", isRead: true,
  },
  {
    id: "4", type: "mention", actorName: "Du Lịch Cùng Hà", actorInitial: "H", actorColor: "#f7c948",
    content: "đã đề cập đến bạn trong một bình luận", time: "2 giờ", isRead: true,
  },
  {
    id: "5", type: "like", actorName: "Gym & Life", actorInitial: "G", actorColor: "#00b4d8",
    content: "đã thích bình luận của bạn", time: "5 giờ", isRead: true,
  },
];

// ─── Profile page data ────────────────────────────────────────────────
export interface ProfileVideo {
  id: string;
  thumbnailColor: string;
  views: string;
}

export interface ProfileData {
  name: string;
  handle: string;
  initial: string;
  bio: string;
  followers: string;
  following: string;
  likes: string;
  videos: ProfileVideo[];
}

export const mockProfile: ProfileData = {
  name: "Nguyễn Văn A",
  handle: "@nguyenvana",
  initial: "N",
  bio: "📍 Hà Nội | 🎥 Content Creator | Chia sẻ cuộc sống hằng ngày ✨",
  followers: "12.4N",
  following: "234",
  likes: "89.3N",
  videos: [
    { id: "v1", thumbnailColor: "#ff2d55", views: "234N" },
    { id: "v2", thumbnailColor: "#7c5cfc", views: "89N" },
    { id: "v3", thumbnailColor: "#00c896", views: "1.2Tr" },
    { id: "v4", thumbnailColor: "#f7c948", views: "456N" },
    { id: "v5", thumbnailColor: "#00b4d8", views: "78N" },
    { id: "v6", thumbnailColor: "#ff6b35", views: "320N" },
    { id: "v7", thumbnailColor: "#ff2d55", views: "91N" },
    { id: "v8", thumbnailColor: "#7c5cfc", views: "2.1Tr" },
    { id: "v9", thumbnailColor: "#00c896", views: "145N" },
  ],
};
