console.log('----------------練習問題----------------');


console.log('----------------1. 偶数、奇数----------------');
/**
 * 変数iが偶数の場合は偶数です。
 * 変数iが奇数の場合は奇数です。
 * と表示されるプログラムを書いてください。
 * ※条件分岐を使用します。
 * ※偶数は「2で割り切れる(2で割ったあまりが0と表すことができます)」
 */
let i = 2;
// if文
if (i % 2 === 0) {
	console.log(i + 'は偶数です');
	console.log(`${i}は偶数です`);
} else {
	console.log(i + '奇数です');
	console.log(`${i}は奇数です`);
}
// Switch文
// 真偽値(bool型：true,false)
switch (i % 2 === 0) {
	case true:
		console.log(i + 'は偶数です');
		break;
	default:
		console.log(i + 'は奇跡です');
		break;
}


console.log('----------------2. 合格判定----------------');
/**
 * 英語と数学の点数がそれぞれ60点以上かつ、
 * 合計点が140点以上の場合は、合格、
 * それ以外の場合は、不合格
 * と表示するプログラムを書いてください。
 */
let math = 50;
let english = 100;
let total = math + english;
if (math >= 60 && english >= 60 && total >= 140) {
	console.log('合格');
} else {
	console.log('不合格');
}
// 別の書き方
if (math >= 60) {
	if (english >= 60) {
		if (total >= 140) {
			console.log('合格');
		}else {
			console.log('totalが足りなくて不合格');
		}
	}else {
		console.log('英語点が足りなくて不合格');
	}
}else {
	console.log('数学店が足りない不合格');
}






console.log('----------------3. 数を数える----------------');
/**
 * 配列numbersの中に数字の3が何個あるか画面に表示するプログラム
 * を書いてください。
 * ※繰り返し文とif文を使用します。
 */
let res = 0;
let numbers = [1, 3, 4, 5, 8, 9, 3, 3];
// 個数を数えた数を格納しておく変数
for (let number of numbers) {
	if (number === 3) {		// ３をひとつ見つけたと記録しておく
		res++;				// res++; は res = res + 1; と同じ意味
	}
}
console.log(res);

for (let i = 0; i < 9; i++) {
	if (numbers[i] === 3) {
		res = res + 1;
	}
}
console.log(res);


console.log('----------------4. 3倍した数を表示する----------------');
/**
 * 1から10までの数字をそれぞれ3倍した数字を表示するプログラムを書いてください。
 * 3 6 9 ... 30 までが表示されればOKです
 */
for (let i = 1; i <= 10; i++) {
	console.log(i * 3);			// let res = i * 3 ,console.log(res) も可
}


console.log('----------------5. FizzBuzz----------------');
/**
 * 1から100までの数字を出力するプログラムを書いてください。
 * 但し、
 * 3の倍数の場合はFizz
 * 5の倍数の場合はBuzz
 * 3と5の両方の倍数の場合はFizzBuzz
 * と表示するようにしてください。
 */
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else {
		console.log(i)
	}
}

let moji = '';
for (let i = 1; i <= 100; i++) {
	moji = i;
	if (i % 3 === 0) {
		moji = 'Fizz';
	}
	if (i % 5 === 0) {
		if (moji != 'Fizz') {
			moji = '';
		}
		moji = moji + 'Buzz';
	}
	console.log(moji);
}


console.log('----------------6.九九----------------');
/**
 * 九九を表示するプログラムを書いてください。
 */
for (let i = 1; i <= 9; i++) {
	console.log(`${i}の段`);
	for (let j = 1; j <= 9; j++) {
		let res = i * j;
		console.log(`${i}×${j}=${res}`);				//resなしでx*yでも同じ結果
	}
}


console.log('----------------7. 繰り返しの中断、スキップ----------------');
/**
 * 九九の中で答えが30未満の数値だけ表示してください。
 */
for (let x = 1; x <= 9; x++) {
	for (let y = 1; y <= 9; y++) {
		let res = x * y;
		if (res < 30) {						//30以上をスキップする方法 >=30 continue
			console.log(res);
		}
	}
}


// チャレンジ問題
console.log('----------------1. 女湯問題----------------');
/**
 * 顧客の年齢と性別から顧客が女湯に入れるか判断するプログラムを書いてください。
 * 顧客を表す変数customerを定義してください
 * 変数customerにはkey ageと、key genderをもつ連想配列を代入してください。
 * ageには任意の数字を入れてください。
 * genderは male, female, otherのいずれかにしてください。
 * 女湯に入れる場合は「入れます」、入れない場合は「入れない」と表示してください。
 */
let customer = { age:7, gender:'male'};
if (customer['gender'] === 'female') {
	console.log('入れます');
} else {
	if (customer['age'] <= 3) {
		console.log('入れます');
	} else {
		console.log('入れません');
	}
}


console.log('----------------2. 素数を表示するプログラム----------------');
/**
 * 100以下の素数を表示してください。
 * 1は素数には含みません。
 * 素数とは1とその数以外では割り切れない数です。
 * 言い方をかえると約数が2つしかない数です。
 */
for (let i = 2; i <= 100; i++) {
	for (let j = 2; j <= i; j++) {
		if (i % j === 0 && j < i) {
			break;
		}
		if (i === j) {
			console.log(i);
		}
	}
}




ERIKA様、お世話になっております。
秋元です。
お忙しいところ大変失礼いたします。
明日予定しておりました「鬼滅の刃」映画観賞につきまして、
予定が変更する可能性があり、ご連絡いたしました。
本日のご予定はいかがでしょうか。
ご多忙の中、恐れ入りますがご連絡お待ちしております。
秋元

let answer = { wannaGoTogether:'行きたい' ,todaySchedule:'無し'};
if (answer['wannaGoTogether'] === '行きたい' && answer['todaySchedule'] === '無し'){
	console.log('本日は予定がないのでご一緒できます。');
} else {
	if (answer['wannaGtoTogeter'] === '行きたい' && answer['todaySchedule'] ==='有り'){
		console.log('非常にご一緒したいのですが、本日は予定があるのでご遠慮します。');
	} else {
		console.log('お誘いいただきありがとうございます。今回はご遠慮させていただきます。');
	}
}
if (math >= 60) {
	if (english >= 60) {
		if (total >= 140) {
			console.log('合格');
		}else {
			console.log('totalが足りなくて不合格');
		}
	}else {
		console.log('英語点が足りなくて不合格');
	}
}else {
	console.log('数学店が足りない不合格');
}


let customer = { age:7, gender:'male'};
if (customer['gender'] === 'female') {
	console.log('入れます');
} else {
	if (customer['age'] <= 3) {
		console.log('入れます');
	} else {
		console.log('入れません');
	}
}







