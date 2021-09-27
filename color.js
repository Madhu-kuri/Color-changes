var colors= ['#ffc6b3' ,'#D3D3D3', '#ADD8E6', '#87CEFA', '#D2B48C', '#D8BFD8', '#FFE4E1', '#9370DB', '#FFFACD', '#B0C4DE', '#D8BFD8']

function changeColor()
{
    var num =Math.floor(Math.random()*(colors.length))
    document.getElementById("target").style.backgroundColor = colors[num];
}