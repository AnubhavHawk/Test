var row, nameTd, phoneTd, buttonTd, button;
$(document).ready(function(){
    $('')
    $('.add-section').hide();
    $('#add').click(function(){
            $('.table-container').hide()
            $('.add-section').show()
            row = null;
            $('#back').click(function(){
                $('.table-container').show()
                $('.add-section').hide()
            })

    })
    // document.getElementsByClassName('btn-delete')[0].addEventListener('click', function(){
    //     alert("You clicked");
    // })
    $('#add-entry').click(function(){
        row = document.createElement('tr');
        nameTd = document.createElement('td');
        nameTd.innerHTML=name;
        phoneTd = document.createElement('td');
        phoneTd.innerHTML=phone;
        buttonTd = document.createElement('td');
        button = document.createElement('button');
        button.innerText = "Delete";
        button.className = "btn-delete";
        buttonTd.appendChild(button);
        // nameTd.innerHTML = name;
        buttonTd.addEventListener('click', button.parentElement.remove); //-----------------------------------add a listener to remove the complete row
        // phoneTd.innerHTML = phone;
        row.appendChild(nameTd);
        row.appendChild(phoneTd);
        row.appendChild(buttonTd);
        document.getElementById('table-body').append(row);
        $('.table-container').show()
        $('.add-section').hide()
    })  
});
$('#name-input').val("");
$('#phone-input').val("");
document.getElementById('name-input').addEventListener('input', set);
document.getElementById('phone-input').addEventListener('input', set);
var name=null, phone=null;
function set()
{
    name = document.getElementById('name-input').value;
    phone = document.getElementById('phone-input').value;
    
    document.getElementsByClassName('name')[0].innerHTML = "Name: "+name;
    document.getElementsByClassName('phone')[0].innerHTML = "Phone: "+phone;
}
// var row, nameTd, phoneTd;
// $('#add-entry').click(function()
// {
//     row = document.createElement('tr');
//     nameTd = document.createElement('td');
//     nameTd.innerHTML=name;
//     phoneTd = document.createElement('td');
//     phoneTd.innerHTML=phone;
//     var buttonTd = document.createElement('td');
//     var button = document.createElement('button');
//     buttonTd.appendChild(button);
//     // nameTd.innerHTML = name;
//     // phoneTd.innerHTML = phone;
//     row.appendChild(nameTd);
//     row.appendChild(phoneTd);
//     row.appendChild(buttonTd);
//     document.getElementsByTagName('tbody')[0].append(row);
//     document.getElementsByClassName('hidden-input')[0].innerText = row.innerHTML;
//     // document.getElementById('table-body').appendChild(row);
//     $('.add-section').hide();
//     // $('.tabel-container').toggle();
    
// });
