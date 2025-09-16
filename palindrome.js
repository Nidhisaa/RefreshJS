const reverse = (string) => {
    console.log(string.split("").reverse().join("") === string ? "palindrome":"diaphodrome");
};
reverse("plug");