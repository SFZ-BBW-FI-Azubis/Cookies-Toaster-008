export let users = [
  {
    id: 1,
    username: "capybaraadmin",
    password: "capybaraforpresident",
    expire_date: "2023-05-01",
    visit_count: "83",
    toast_count: "420",
  },
  {
    id: 2,
    username: "capybara",
    password: "capybaraforpresident",
    expire_date: "2023-05-01",
    visit_count: "83",
    toast_count: "420",
  },
];

serialize(users);

// Change JavaScript Object to JSON String
export function serialize(obj) {
  localStorage.setItem("users", JSON.stringify(obj));
}

// Change JSON String to JavaScript Object
export function deserialize() {
  return JSON.parse(localStorage.getItem("users"));
}
