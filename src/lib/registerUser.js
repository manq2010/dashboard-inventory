export default async function registerUser({firstName, lastName, email, username, password }) {

const user = {
    first_name: firstName,
    last_name: lastName,
    username: username,
    email: email,
    password: password,
};

const requestBody = {
    user: user
};

const res = await fetch("http://localhost:4000/api/v1/auth/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody)
    });

    console.log("api res", res);
    const token = res.headers.get("Authorization");
    console.log("user: token:", token);
    console.log(token)
  return res
}

