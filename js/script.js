document.getElementById('btn-in').addEventListener('click', function(){
    const textInput = document.getElementById('todo-text');
    const textInputValue = textInput.value;
   

    const fieldInput = document.getElementById('todo-field');
    const fieldInputValue = fieldInput.value;
   
    if (fieldInputValue == 'bangla') {

        location.href = 'index.html';
    } else {
        alert('please! Input The valid password');
    }
    fieldInput.value = ' ';
    textInput.value = ' ';
    })