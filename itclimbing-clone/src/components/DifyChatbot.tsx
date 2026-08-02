"use client";

import { useEffect } from "react";

export default function DifyChatbot() {
  useEffect(() => {
    // Dify config
    window.difyChatbotConfig = {
      token: "FXmFfa27JkWfTEws",
      inputs: {},
      systemVariables: {},
      userVariables: {},
    };

    // 이미 로드된 스크립트가 있으면 제거
    const existing = document.querySelector(
      'script[src="https://udify.app/embed.min.js"]'
    );
    if (existing) {
      existing.remove();
    }

    // embed script 생성
    const script = document.createElement("script");
    script.src = "https://udify.app/embed.min.js";
    script.id = "FXmFfa27JkWfTEws";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // cleanup
      const el = document.querySelector(
        'script[src="https://udify.app/embed.min.js"]'
      );
      if (el) el.remove();
    };
  }, []);

  return null;
}
