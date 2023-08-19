function calculateTriangleArea(){
    // console.log('clicked');
    const baseFeild = document.getElementById('triangle-base');
    const baseValueText = baseFeild.value;
    const base = parseFloat(baseValueText);
    // console.log(base);


    const heightFeild = document.getElementById('triangle-height');
    const heightValueText = heightFeild.value;
    const height = parseFloat(heightValueText);
    // console.log(height);

    const area = 0.5 * base * height ;
    // console.log(area);


    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}


function calculateRectangleArea(){
    // console.log('clecked rec')

    const widthFeild = document.getElementById('rectangle-width');
    const widthValueText = widthFeild.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    const lengthFeild = document.getElementById('rectangle-length');
    const lengthValueText = lengthFeild.value;
    const length = parseFloat(lengthValueText);
    // console.log(length);

    const area = width * length;
   
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;



}