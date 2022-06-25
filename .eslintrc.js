module.exports = {
    root: true,
    env: {
        es2022: true,
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended", "@vue/prettier"],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": import.meta.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": import.meta.env.NODE_ENV === "production" ? "warn" : "off",
        "no-unused-vars": [
            "warn",
            {
                ignoreRestSiblings: true,
            },
        ],
    },
}
