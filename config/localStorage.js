export const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
  const event = new Event("itemInserted");
  event.value = value;
  event.key = key;
  document.dispatchEvent(event);
};
export const removeFromLocalStorage = key => {
  localStorage.removeItem(key);
  return;
};
export const fetchFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};
