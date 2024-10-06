// JavaScript

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

// console.log(document.getElementById('myColor').value); もう使わないので非表示

//document.getElementById('bodyText').textContent = document.getElementById('myColor').value;
text.textContent = color.value;
// 1 元々「カラーコード」と入っていた部分に「文字の置き換え」を入れた
// 2 ＝の後にdocument.〜を入れ、カラーコードが見えるようにした
// 3 定数を決めたので、それを使いコンパクトに書いたバージョンがこれ

// changeColorの動作を定義する
function changeColor(){

    // カラーコードを表示 「コード：#000000」のように表示されるよう変更した
    if (color.value === '#ffffff') {
      text.textContent = 'カラーコード：' + color.value + '(white)';
    } else if (color.value === '#000000') {
      text.textContent = 'カラーコード：' + color.value + '(black)';
    } else {
      text.textContent = ' カラーコード： ' + color.value;
    }
      // 背景色を変更
      document.body.style.backgroundColor = color.value;

    }

// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);
// クリックしたらカラーコードが表示される＋背景色も一緒に変わる