import { useNuxtApp } from "#app";

export function showToast({
  severity = "",
  summary = "",
  detail = "",
  life = 3000,
  position = "center",
}) {
  const { $toast } = useNuxtApp();
  $toast.add({ severity, summary, detail, life, position });
}
