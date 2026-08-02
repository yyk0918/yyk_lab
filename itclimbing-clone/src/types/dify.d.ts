export {};

declare global {
  interface Window {
    difyChatbotConfig?: {
      token: string;
      inputs?: Record<string, unknown>;
      systemVariables?: Record<string, unknown>;
      userVariables?: Record<string, unknown>;
    };
  }
}
