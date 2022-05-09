


$(function()
{

//--1--
$("#dialog").dialog({
       autoOpen:false,
        modal:true,
    })

$("#open").click(function()
{
    $("#dialog").dialog("open")
})

//--2--
$("#pho").draggable({
    revert:"invalid",
    
});
$("#count").droppable({
    accept:"#pho",
    backgroundcolor: "red"
    
});


//--3--
$("#ahmed").accordion();

//--4--
  
$.getJSON("https://reqres.in/api/users",function(items)
{
  console.log(items);
    $("#myTable").dataTable(
        {
            data:items.data,
            
            columns:[
            { data: 'id' },
         { data: 'email' },
        { data: 'first_name' },
        { data: 'last_name' }
            ]
            
        }
    )
})
    })







