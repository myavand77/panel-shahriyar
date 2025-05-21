import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export type ToastType = "success" | "error" | "info";

interface ToastOptions {
  text: string;
  type?: ToastType;
  duration?: number;
  position?: "left" | "right" | "center";
}

export function showToast({
  text,
  type = "info",
  duration = 3000,
  position = "right",
}: ToastOptions) {
  let background = "#1b7c94"; // default: primary-500
  if (type === "success") background = "#4CAF50";
  if (type === "error") background = "#f44336";
  if (type === "info") background = "#1b7c94";

  Toastify({
    text,
    duration,
    gravity: "top",
    position,
    style: { background },
    close: true,
  }).showToast();
} 