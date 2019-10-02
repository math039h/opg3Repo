let Button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Button");
let TextInput: HTMLInputElement = <HTMLInputElement>document.getElementById("TextInput");
let SelectManipulation: HTMLSelectElement = <HTMLSelectElement>document.getElementById("SelectManipulation");
let SelectedOptions: HTMLOptionsCollection = <HTMLOptionsCollection>SelectManipulation.options;
let TextOutput: HTMLDivElement = <HTMLDivElement>document.getElementById("TextOutput");

Button.addEventListener("click", noget);
function noget()
{
    let text: string = TextInput.value;
    
    let streng: string = SelectedOptions[SelectedOptions.selectedIndex].value;
    if (streng == "ToUpper") {
        
        TextOutput.innerHTML = text.toUpperCase();
    }
    if (streng == "ToLower") {

        TextOutput.innerHTML = text.toLowerCase();
    }
    if (streng == "Count") {
        TextOutput.innerHTML = text.length.toString();
    }
}