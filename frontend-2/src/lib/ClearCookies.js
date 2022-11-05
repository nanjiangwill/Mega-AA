export default function ClearCookies() {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    const minutes = 60;
    const date = new Date();
    date.setTime(date.getTime() - minutes * 60 * 1000);
    document.cookie = `${name}=;expires=${date.toGMTString()}`;
  }
}
