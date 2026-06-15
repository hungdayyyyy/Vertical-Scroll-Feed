"use client";

import { useState } from "react";
import { mockMessages, mockNotifications } from "@/data/mockPages";

const notifIcon = (type: string) => {
  if (type === "like")
    return (
      <svg viewBox="0 0 24 24" fill="#ff2d55" width="16" height="16">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  if (type === "follow")
    return (
      <svg viewBox="0 0 24 24" fill="#00c896" width="16" height="16">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    );
  if (type === "comment")
    return (
      <svg viewBox="0 0 24 24" fill="#7c5cfc" width="16" height="16">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="#f7c948" width="16" height="16">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );
};

export default function InboxPage() {
  const [tab, setTab] = useState<"messages" | "notifications">("messages");
  const totalUnread = mockMessages.reduce((s, m) => s + m.unread, 0);
  const unreadNotifs = mockNotifications.filter((n) => !n.isRead).length;

  return (
    <div className="page-scroll">
      <h1 className="page-title">Hộp thư</h1>

      {/* Tabs */}
      <div className="inbox-tabs">
        <button
          className={`inbox-tab ${tab === "messages" ? "inbox-tab--active" : ""}`}
          onClick={() => setTab("messages")}
        >
          Tin nhắn
          {totalUnread > 0 && <span className="badge">{totalUnread}</span>}
        </button>
        <button
          className={`inbox-tab ${tab === "notifications" ? "inbox-tab--active" : ""}`}
          onClick={() => setTab("notifications")}
        >
          Thông báo
          {unreadNotifs > 0 && <span className="badge">{unreadNotifs}</span>}
        </button>
      </div>

      {tab === "messages" && (
        <div className="message-list">
          {mockMessages.map((msg) => (
            <div key={msg.id} className="message-row">
              <div className="msg-avatar-wrap">
                <div className="user-avatar" style={{ background: msg.senderColor }}>
                  {msg.senderInitial}
                </div>
                {msg.isOnline && <span className="online-dot" />}
              </div>
              <div className="msg-content">
                <div className="msg-header">
                  <span className="msg-name">{msg.senderName}</span>
                  <span className="msg-time">{msg.time}</span>
                </div>
                <span className={`msg-preview ${msg.unread > 0 ? "msg-preview--unread" : ""}`}>
                  {msg.preview}
                </span>
              </div>
              {msg.unread > 0 && <span className="unread-badge">{msg.unread}</span>}
            </div>
          ))}
        </div>
      )}

      {tab === "notifications" && (
        <div className="message-list">
          {mockNotifications.map((n) => (
            <div key={n.id} className={`message-row ${!n.isRead ? "message-row--unread" : ""}`}>
              <div className="msg-avatar-wrap">
                <div className="user-avatar" style={{ background: n.actorColor }}>
                  {n.actorInitial}
                </div>
                <span className="notif-icon-badge">{notifIcon(n.type)}</span>
              </div>
              <div className="msg-content">
                <span className="msg-name">{n.actorName} </span>
                <span className="msg-preview">{n.content}</span>
                <span className="msg-time" style={{ display: "block", marginTop: 2 }}>{n.time} trước</span>
              </div>
              {!n.isRead && <span className="unread-dot" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
