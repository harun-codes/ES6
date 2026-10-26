const extractUserInfo = (userobj) => {
  const {user:{ name: userName, age },hobbies,} = userobj;

  if (!userName) {
    return "Invalid";
  }

  const [firstHobby = "nothing yet"] = hobbies;

  return `${userName} (${age}) likes ${firstHobby}`;
};

console.log(
  extractUserInfo({
    user: { name: "Sadia", age: 22 },
    hobbies: ["reading", "coding"],
  }),
);

console.log(extractUserInfo({ user: { name: "Rafi", age: 19 }, hobbies: [] }));

console.log(extractUserInfo({ user: { age: 30 }, hobbies: [] }));
