function Selector_KhuVUc(){
    if (document.querySelector('input[name="selector"]:checked') == null) {
        var points =0;
        return points;
    }
    var KhuVuc = document.querySelector('input[name="selector"]:checked').value;
    console.log("🚀 ~ file: jsBuoi5.js:3 ~ Selector_KhuVUc ~ KhuVuc:", KhuVuc)
    switch (KhuVuc) {
        case "Khu_A": {
            var points = 2;
            break;
        }
        case "Khu_B": {
            var points = 1;
            break;
        } 
        case "Khu_C": {
            var points = 0.5;
            break;
        }
        default:{
            var points =0;
        }
    }
    return points;
}
function Selector_DoiTuong(){
    if (document.querySelector('input[name="selector_b1"]:checked')==null){
        points =0;
        return points;
    }
    var DoiTuong= document.querySelector('input[name="selector_b1"]:checked').value;
    switch (DoiTuong) {
        case "Đối tượng_1": {
            var points = 2.5;
            break;
        }
        case "Đối tượng_2": {
            var points = 1.5;
            break;
        } 
        case "Đối tượng_3": {
            var points = 1;
            break;
        }
        default:{
            var points =0;
        }
    }
    return points;
}

function bai_1(){
    var benchmark = document.getElementById("benchmark").value*1;
    var literature_points = document.getElementById("literature_points").value*1,
    math_points = document.getElementById("math_points").value*1,
    english_points = document.getElementById("english_points").value*1;

    var DoiTuong= document.querySelector('input[name="selector_b1"]:checked');
    console.log("🚀 ~ file: jsBuoi5.js:53 ~ bai_1 ~ DoiTuong:", DoiTuong)
    


    var KhuVuc_points = Selector_KhuVUc(),
    DoiTuong_points =Selector_DoiTuong();  

    if (math_points == 0 || english_points == 0 || literature_points == 0) {
        document.getElementById(`Ketqua1`).innerHTML = ` Chúc bạn may mắn lần sau !`;
        return;
    }
    else {
        var avg_points = (literature_points+math_points+english_points)/3 + DoiTuong_points + KhuVuc_points;
        if (avg_points >= benchmark) {
            document.getElementById(`Ketqua1`).innerHTML = ` Chúc mừng bạn đã trúng tuyển với số điểm trung bình: ${avg_points.toLocaleString()} !`;

        }
        else{
            document.getElementById(`Ketqua1`).innerHTML = ` Chúc bạn may mắn lần sau !`;
            return;
        }
    }
}