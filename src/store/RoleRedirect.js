export default function Redirect(router) {
  switch (localStorage.getItem("role")) {
    case "client":
      {
        router.push({ name: "client_page" });
      }
      break;
    case 1:
      {
        router.push({ name: "SA_page" });
      }
      break;
    case 2:
      {
        router.push({ name: "A_page" });
      }
      break;
    case 3:
      {
        router.push({ name: "D_page" });
      }
      break;
    case 4:
      {
        router.push({ name: "S_page" });
      }
      break;
    default:
      {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      }
      break;
  }
}
