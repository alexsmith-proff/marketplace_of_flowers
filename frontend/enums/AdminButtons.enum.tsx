//Тип админ кнопки
export enum AdminButtonType {
    Text,
    Ico, 
    Toggle
}

//Функциональность админ кнопки
export enum AdminButtonFunctional {
    // Используется обработчик OnClickBtn
    Standard,

    // Показывает и скрывает Edit
    ToggleVisibleEdit,

}