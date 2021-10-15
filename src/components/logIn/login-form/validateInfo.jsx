export default function validateInfo(values) {
    let errors = {}

    if (!values.email.trim()) {
        errors.email = "Обязательно для заполнения"
    } else if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim.test(values.email)) {
        errors.email = "Некорректный email"
    }

    if (!values.password) {
        errors.password = "Обязательно для заполнения"
    } else if (values.password.length < 6) {
        errors.password = "Пароль должен содержать минимум 6 символов"
    }
    console.log(errors.password)

    return errors
}
