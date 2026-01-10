export const getInitials = (name = "") => {
  return name
    .trim()
    .split(" ")
    .map(w => w[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};
