$(document).ready(function() {

	var health = {
		warrior: 200,
		mage: 180,
		thief: 150,
		cleric: 120
	}

	//on mouse rollover at start it shows the stats of the character? I like it

	var enemies = 3;

	var warDmg = 0;

	var mageDmg = 2;

	var thiefDmg = -1;

	var clericDmg = 0;

	var fightingWarrior = false;

	var fightingMage = false;

	var fightingThief = false;

	var fightingCleric = false;

	var attackingWarrior = false;

	var attackingMage = false;

	var attackingThief = false;

	var attackingCleric = false;

	var warriorDead = false;

	var mageDead = false;

	var thiefDead = false;

	var clericDead = false;

	var warriorStore = false;

	var mageStore = false;

	var thiefStore = false;

	var clericStore = false;

	var compAtk;

	var specialAtk;

	var specialCounter = 3;

	var goldRdm = Math.floor((Math.random() * 20) + 5);

	var goldTotal = goldRdm;

	var warriorMiss = Math.floor((Math.random() * 5) + 0);

	var restart = $('<input type="button" value="Restart"/>');

	var char1 = $('#char_select1');

	var char2 = $('#char_select2');

	var char3 = $('#char_select3');

	var char4 = $('#char_select4');

	var target1 = $('#target1');

	var target2 = $('#target2');

	var target3 = $('#target3');

	var fight = $('#fight');
	//character select screen set up
	char1.append("Warrior");
	char1.append('<img src="assets/images/warrior.png" height="150px">');
	char1.append(health.warrior);
	char2.append("Mage");
	char2.append('<img src="assets/images/mage.png" height="150px">');
	char2.append(health.mage);
	char3.append("Thief");
	char3.append('<img src="assets/images/thief.png" height="150px">');
	char3.append(health.thief);
	char4.append("Cleric");
	char4.append('<img src="assets/images/cleric.png" height="150px">');
	char4.append(health.cleric);

	//css for character select screen
	char1.css('background', 'white').css('border', "solid 2px green").css('width', '115px');
	char2.css('background', 'white').css('border', "solid 2px green").css('width', '150px');
	char3.css('background', 'white').css('border', "solid 2px green").css('width', '95px');
	char4.css('background', 'white').css('border', "solid 2px green").css('width', '105px');
	//widths have all been tested for each char, health can lower w/ no awkward appendages
	
	$('#gold_amt').text(goldTotal);

	char1.mouseenter(function(){
		$('#stats').text("Warrior Stats:\nHit Points: 200\nBase Attack: 4\nAttack Boost: +4\nDefense: 25\nDifficulty: *\nSpecial: Counter Attack\n(Deflects incoming strikes and\ncounter-attacks for a consistent\nmedium to high amount of damage)");
	});
	char1.mouseleave(function(){
		$('#stats').text("");
	});
	char2.mouseenter(function(){
		$('#stats').text("Mage Stats:\nHit Points: 180\nBase Attack: 10\nAttack Boost: +8\nDefense: 10\nDifficulty: **\nSpecial: Fireball\n(Launches a firey attack that\ndeals an inconsistent low to high\namount of damage. Still\n susceptible to attacks while casting)");
	});
	char2.mouseleave(function(){
		$('#stats').text("");
	});
	char3.mouseenter(function(){
		$('#stats').text("Thief Stats:\nHit Points: 150\nBase Attack: 5\nAttack Boost: +6\nDefense: 12\nDifficulty: ****\nSpecial: Swiping Blow\n(A nimble attack that deals\na consistent amount of low damage\nwhile stealing gold at the same time)");
	});
	char3.mouseleave(function(){
		$('#stats').text("");
	});
	char4.mouseenter(function(){
		$('#stats').text("Cleric Stats:\nHit Points: 120\nBase Attack: 3\nAttack Boost: +3\nDefense: 5\nDifficulty: ***\nSpecial: Heal\n(A flash of light that recovers\na medium to high amout of damage.\nComes so quick the enemy won't\nhave time to strike)");
	});
	char4.mouseleave(function(){
		$('#stats').text("");
	});

	//if character chosen is warrior
	char1.one("click", function(){
		warriorStore = true;
		fightingMage = true;
		fightingThief = true;
		fightingCleric = true;
		char2.remove();
		char3.remove();
		char4.remove();

		target1.append("Mage");
		target1.append('<img src="assets/images/mage.png" height="150px">');
		target1.append(health.mage);
		target2.append("Thief");
		target2.append('<img src="assets/images/thief.png" height="150px">');
		target2.append(health.thief);
		target3.append("Cleric");
		target3.append('<img src="assets/images/cleric.png" height="150px">');
		target3.append(health.cleric);


		$('#stats').css('left', '295px');
		target1.css('background', 'white').css('border', "solid 2px orange").css('width', '150px').css('left', '10px');
		target2.css('background', 'white').css('border', "solid 2px orange").css('width', '95px').css('left', '180px');
		target3.css('background', 'white').css('border', "solid 2px orange").css('width', '105px').css('left', '295px');

		$("#text1").text("Warrior ready for battle!");
		$("#text2").text("");
		});

	//if mage is chosen
	char2.one("click", function(){
		mageStore = true;
		fightingWarrior = true;
		fightingThief = true;
		fightingCleric = true;
		char1.remove();
		char3.remove();
		char4.remove();

		char2.css('left', '10px');
		target1.append("Warrior");
		target1.append('<img src="assets/images/warrior.png" height="150px">');
		target1.append(health.warrior);
		target2.append("Thief");
		target2.append('<img src="assets/images/thief.png" height="150px">');
		target2.append(health.thief);
		target3.append("Cleric");
		target3.append('<img src="assets/images/cleric.png" height="150px">');
		target3.append(health.cleric);

		$('#stats').css('left', '295px');
		target1.css('background', 'white').css('border', "solid 2px orange").css('width', '115px').css('left', '10px');
		target2.css('background', 'white').css('border', "solid 2px orange").css('width', '95px').css('left', '145px');
		target3.css('background', 'white').css('border', "solid 2px orange").css('width', '105px').css('left', '260px');

		$("#text1").text("Mage ready for battle!");
		$("#text2").text("");
		});

	//if thief is chosen
	char3.one("click", function(){
		thiefStore = true;
		fightingWarrior = true;
		fightingMage = true;
		fightingCleric = true;
		char1.remove();
		char2.remove();
		char4.remove();

		char3.css('left', '10px');
		target1.append("Warrior");
		target1.append('<img src="assets/images/warrior.png" height="150px">');
		target1.append(health.warrior);
		target2.append("Mage");
		target2.append('<img src="assets/images/mage.png" height="150px">');
		target2.append(health.mage);
		target3.append("Cleric");
		target3.append('<img src="assets/images/cleric.png" height="150px">');
		target3.append(health.cleric);

		$('#stats').css('left', '295px');
		target1.css('background', 'white').css('border', "solid 2px orange").css('width', '115px').css('left', '10px');
		target2.css('background', 'white').css('border', "solid 2px orange").css('width', '150px').css('left', '145px');
		target3.css('background', 'white').css('border', "solid 2px orange").css('width', '105px').css('left', '315px');

		$("#text1").text("Thief ready for battle!");
		$("#text2").text("");
		});

	//if cleric is chosen
	char4.one("click", function(){
		clericStore = true;
		fightingWarrior = true;
		fightingMage = true;
		fightingThief = true;
		char1.remove();
		char2.remove();
		char3.remove();

		char4.css('left', '10px');
		target1.append("Warrior");
		target1.append('<img src="assets/images/warrior.png" height="150px">');
		target1.append(health.warrior);
		target2.append("Mage");
		target2.append('<img src="assets/images/mage.png" height="150px">');
		target2.append(health.mage);
		target3.append("Thief");
		target3.append('<img src="assets/images/thief.png" height="150px">');
		target3.append(health.thief);

		$('#stats').css('left', '295px');
		target1.css('background', 'white').css('border', "solid 2px orange").css('width', '115px').css('left', '10px');
		target2.css('background', 'white').css('border', "solid 2px orange").css('width', '150px').css('left', '145px');
		target3.css('background', 'white').css('border', "solid 2px orange").css('width', '105px').css('left', '315px');

		$("#text1").text("Cleric ready for battle!");
		$("#text2").text("");
		});

//add purchase buttons soon
//make it to where you cant buy anything in battle
target1.bind("click", fight1);
target2.bind("click", fight2);
target3.bind("click", fight3);
$('#attack_btn').bind("click", attackFunc);
$('#special_btn').bind("click", specialFunc);
$('#escape_btn').bind("click", escapeFunc);
$('#potion_buy').bind("click", potionPurchase);
$('#special_buy').bind("click", specialPurchase);

function potionPurchase (e) {
	if (attackingWarrior || attackingMage || attackingThief || attackingCleric) {
		$("#text1").text("You can't buy that while in battle!");
		$("#text2").text("");
	}
	else if (warriorStore && goldTotal >= 25) {
		goldTotal -= 25;
		health.warrior += 25;
		if (health.warrior >= 200) {
			health.warrior = 200;
		}
		char1.empty();
		char1.append("Warrior");
		char1.append('<img src="assets/images/warrior.png" height="150px">');
		char1.append(health.warrior);
		$("#gold_amt").text(goldTotal);
		$("#text1").text("Warrior drank a potion and recovered 25 health!");
		$("#text2").text("");
	}
	else if (mageStore && goldTotal >= 25) {
		goldTotal -= 25;
		health.mage += 25;
		if (health.mage >= 180) {
			health.mage = 180;
		}
		char2.empty();
		char2.append("Mage");
		char2.append('<img src="assets/images/mage.png" height="150px">');
		char2.append(health.mage);
		$("#gold_amt").text(goldTotal);
		$("#text1").text("Mage drank a potion and recovered 25 health!");
		$("#text2").text("");
	}
	else if (thiefStore && goldTotal >= 25) {
		goldTotal -= 25;
		health.thief += 25;
		if (health.thief >= 150) {
			health.thief = 150;
		}
		char3.empty();
		char3.append("Thief");
		char3.append('<img src="assets/images/thief.png" height="150px">');
		char3.append(health.thief);
		$("#gold_amt").text(goldTotal);
		$("#text1").text("Thief drank a potion and recovered 25 health!");
		$("#text2").text("");
	}
	else if (clericStore && goldTotal >= 25) {
		goldTotal -= 25;
		health.cleric += 25;
		if (health.cleric >= 120) {
			health.cleric = 120;
		}
		char4.empty();
		char4.append("Cleric");
		char4.append('<img src="assets/images/cleric.png" height="150px">');
		char4.append(health.cleric);
		$("#gold_amt").text(goldTotal);
		$("#text1").text("Cleric drank a potion and recovered 25 health!");
		$("#text2").text("");
	}
	else if (goldTotal < 25) {
		$("#text1").text("Not enough gold!");
		$("#text2").text("");
	}
}

function specialPurchase (e) {
	if (attackingWarrior || attackingMage || attackingThief || attackingCleric) {
		$("#text1").text("You can't buy that while in battle!");
		$("#text2").text("");
	}
	else if ((warriorStore || mageStore || thiefStore || clericStore) && goldTotal >= 35) {
		goldTotal -= 35;
		specialCounter++;
		$("#gold_amt").text(goldTotal);
		$("#text1").text("You gained an additional special!");
		$("#text2").text("");
	}
}

// can only fight mage or warrior in fight1
// can only fight thief or mage in fight2
// can only fight thief or cleric in fight3

function fight1 (e) {
	if (warriorStore && fightingMage) {
		target1.remove();
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '150px');
		attackingMage = true;
	}
	else if (mageStore || thiefStore || clericStore && fightingWarrior) {
		target1.remove();
		fight.append("Warrior");
		fight.append('<img src="assets/images/warrior.png" height="150px">');
		fight.append(health.warrior);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '115px');
		attackingWarrior = true;
	}
	fightsFalse();
}

function fight2 (e) {
	if (warriorStore || mageStore && fightingThief) {
		target2.remove();
		fight.append("Thief");
		fight.append('<img src="assets/images/thief.png" height="150px">');
		fight.append(health.thief);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '95px');
		attackingThief = true;
	}
	else if (thiefStore || clericStore && fightingMage) {
		target2.remove();
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '150px');
		attackingMage = true;
	}
	fightsFalse();
}

function fight3 (e) {
	if (warriorStore || mageStore || thiefStore && fightingCleric) {
		target3.remove();
		fight.append("Cleric");
		fight.append('<img src="assets/images/cleric.png" height="150px">');
		fight.append(health.cleric);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '105px');
		attackingCleric = true;
	}
	else if (clericStore && fightingThief) {
		target3.remove();
		fight.append("Thief");
		fight.append('<img src="assets/images/thief.png" height="150px">');
		fight.append(health.thief);
		fight.css('background', 'white').css('border', "solid 2px red").css('width', '95px');
		attackingThief = true;
	}
	fightsFalse();
}


function attackFunc (e) {
	if (attackingWarrior === false && attackingMage === false && attackingThief === false && attackingCleric === false) {
		$("#text1").text("There is nothing to attack!");
		$("#text2").text("");
	}
	//warrior's attack function below
	else if (attackingMage && warriorStore) {
		compAtk = Math.floor((Math.random() * 20) + 15);
		health.warrior -= compAtk;
		warDmg = warDmg+4;
		health.mage -= warDmg;
		char1.empty();
		char1.append("Warrior");
		char1.append('<img src="assets/images/warrior.png" height="150px">');
		char1.append(health.warrior);
		fight.empty();
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		$("#text1").text("Warrior attacked for "+ warDmg + " damage.");
		$("#text2").text("Mage counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingThief && warriorStore) {
		compAtk = Math.floor((Math.random() * 15) + 5);
		health.warrior -= compAtk;
		warDmg = warDmg+4;
		health.thief -= warDmg;
		char1.empty();
		char1.append("Warrior");
		char1.append('<img src="assets/images/warrior.png" height="150px">');
		char1.append(health.warrior);
		fight.empty();
		fight.append("Thief");
		fight.append('<img src="assets/images/thief.png" height="150px">');
		fight.append(health.thief);
		$("#text1").text("Warrior attacked for " + warDmg + " damage.");
		$("#text2").text("Thief counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingCleric && warriorStore) {
		compAtk = Math.floor((Math.random() * 12) + 3);
		health.warrior -= compAtk;
		warDmg = warDmg+4;
		health.cleric -= warDmg;
		char1.empty();
		char1.append("Warrior");
		char1.append('<img src="assets/images/warrior.png" height="150px">');
		char1.append(health.warrior);
		fight.empty();
		fight.append("Cleric");
		fight.append('<img src="assets/images/cleric.png" height="150px">');
		fight.append(health.cleric);
		$("#text1").text("Warrior attacked for " + warDmg + " damage.");
		$("#text2").text("Cleric counter-attacked for " + compAtk + " damage.");
	}
	//mage's attack function below
	else if (attackingWarrior && mageStore) {
		compAtk = Math.floor((Math.random() * 30) + 20);
		health.mage -= compAtk;
		mageDmg = mageDmg+8;
		health.warrior -= mageDmg;
		char2.empty();
		char2.append("Mage");
		char2.append('<img src="assets/images/mage.png" height="150px">');
		char2.append(health.mage);
		fight.empty();
		fight.append("Warrior");
		fight.append('<img src="assets/images/warrior.png" height="150px">');
		fight.append(health.warrior);
		$("#text1").text("Mage attacked for " + mageDmg + " damage.");
		$("#text2").text("Warrior counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingThief && mageStore) {
		compAtk = Math.floor((Math.random() * 12) + 3);
		health.mage -= compAtk;
		mageDmg = mageDmg+8;
		health.thief -= mageDmg;
		char2.empty();
		char2.append("Mage");
		char2.append('<img src="assets/images/mage.png" height="150px">');
		char2.append(health.mage);
		fight.empty();
		fight.append("Thief");
		fight.append('<img src="assets/images/thief.png" height="150px">');
		fight.append(health.thief);
		$("#text1").text("Mage attacked for " + mageDmg + " damage.");
		$("#text2").text("Thief counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingCleric && mageStore) {
		compAtk = Math.floor((Math.random() * 18) + 5);
		health.mage -= compAtk;
		mageDmg = mageDmg+8;
		health.cleric -= mageDmg;
		char2.empty();
		char2.append("Mage");
		char2.append('<img src="assets/images/mage.png" height="150px">');
		char2.append(health.mage);
		fight.empty();
		fight.append("Cleric");
		fight.append('<img src="assets/images/cleric.png" height="150px">');
		fight.append(health.cleric);
		$("#text1").text("Mage attacked for " + mageDmg + " damage.");
		$("#text2").text("Cleric counter-attacked for " + compAtk + " damage.");
	}
	//Thief's attack function below
	else if (attackingWarrior && thiefStore) {
		compAtk = Math.floor((Math.random() * 12) + 3);
		health.thief -= compAtk;
		thiefDmg = thiefDmg+6;
		health.warrior -= thiefDmg;
		char3.empty();
		char3.append("Thief");
		char3.append('<img src="assets/images/thief.png" height="150px">');
		char3.append(health.thief);
		fight.empty();
		fight.append("Warrior");
		fight.append('<img src="assets/images/warrior.png" height="150px">');
		fight.append(health.warrior);
		$("#text1").text("Thief attacked for " + thiefDmg + " damage.");
		$("#text2").text("Warrior counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingMage && thiefStore) {
		compAtk = Math.floor((Math.random() * 20) + 7);
		health.thief -= compAtk;
		thiefDmg = thiefDmg+6;
		health.mage -= thiefDmg;
		char3.empty();
		char3.append("Thief");
		char3.append('<img src="assets/images/thief.png" height="150px">');
		char3.append(health.thief);
		fight.empty();
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		$("#text1").text("Thief attacked for " + thiefDmg + " damage.");
		$("#text2").text("Mage counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingCleric && thiefStore) {
		compAtk = Math.floor((Math.random() * 25) + 10);
		health.thief -= compAtk;
		thiefDmg = thiefDmg+6;
		health.cleric -= thiefDmg;
		char3.empty();
		char3.append("Thief");
		char3.append('<img src="assets/images/thief.png" height="150px">');
		char3.append(health.thief);
		fight.empty();
		fight.append("Cleric");
		fight.append('<img src="assets/images/cleric.png" height="150px">');
		fight.append(health.cleric);
		$("#text1").text("Thief attacked for " + thiefDmg + " damage.");
		$("#text2").text("Cleric counter-attacked for " + compAtk + " damage.");
	}
	//cleric's attack function below
	else if (attackingWarrior && clericStore) {
		compAtk = Math.floor((Math.random() * 20) + 5);
		health.cleric -= compAtk;
		clericDmg = clericDmg+3;
		health.warrior -= clericDmg;
		char4.empty();
		char4.append("Cleric");
		char4.append('<img src="assets/images/cleric.png" height="150px">');
		char4.append(health.cleric);
		fight.empty();
		fight.append("Warrior");
		fight.append('<img src="assets/images/warrior.png" height="150px">');
		fight.append(health.warrior);
		$("#text1").text("Cleric attacked for " + clericDmg + " damage.");
		$("#text2").text("Warrior counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingMage && clericStore) {
		compAtk = Math.floor((Math.random() * 15) + 8);
		health.cleric -= compAtk;
		clericDmg = clericDmg+3;
		health.mage -= clericDmg;
		char4.empty();
		char4.append("Cleric");
		char4.append('<img src="assets/images/cleric.png" height="150px">');
		char4.append(health.cleric);
		fight.empty();
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		$("#text1").text("Cleric attacked for " + clericDmg + " damage.");
		$("#text2").text("Mage counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingThief && clericStore) {
		compAtk = Math.floor((Math.random() * 30) + 10);
		health.cleric -= compAtk;
		clericDmg = clericDmg+3;
		health.thief -= clericDmg;
		char4.empty();
		char4.append("Cleric");
		char4.append('<img src="assets/images/cleric.png" height="150px">');
		char4.append(health.cleric);
		fight.empty();
		fight.append("Thief");
		fight.append('<img src="assets/images/thief.png" height="150px">');
		fight.append(health.thief);
		$("#text1").text("Cleric attacked for " + clericDmg + " damage.");
		$("#text2").text("Thief counter-attacked for " + compAtk + " damage.");
	}
	deadCheck();
}

//some ideas for other chars specials:
//warrior might be op, check back on this
//mage will have lots of power, but is still susceptible to hits
//thief can steal gold, but special doesnt do much damage so it will be a trade off if you use it or not, maybe to finish off a kill and be able to grab a potion after
//cleric is just a normal heal, but she doesnt do a lot of damage, and she has low defense so, she will have to make use of her heals to win the game
function specialFunc (e) {
	if (attackingWarrior === false && attackingMage === false && attackingThief === false && attackingCleric === false) {
		$("#text1").text("This is not a time to use your special!");
		$("#text2").text("");
	}
	else if (attackingMage && warriorStore && specialCounter > 0) {
		specialAtk = Math.floor((Math.random() * 25) + 25);
		health.mage -= specialAtk;
		specialCounter--;
		fight.empty();
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		$("#text1").text("Warrior blocked the Mage's attack!");
		$("#text2").text("Countered for " + specialAtk + " damage! (" + specialCounter + " special(s) remain)");
	}
	else if (attackingThief && warriorStore && specialCounter > 0) {
		specialAtk = Math.floor((Math.random() * 25) + 25);
		health.thief -= specialAtk;
		specialCounter--;
		fight.empty();
		fight.append("Thief");
		fight.append('<img src="assets/images/thief.png" height="150px">');
		fight.append(health.thief);
		$("#text1").text("Warrior blocked the Thief's attack!");
		$("#text2").text("Countered for " + specialAtk + " damage! (" + specialCounter + " special(s) remain)");
	}
	else if (attackingCleric && warriorStore && specialCounter > 0) {
		specialAtk = Math.floor((Math.random() * 25) + 25);
		health.cleric -= specialAtk;
		specialCounter--;
		fight.empty();
		fight.append("Cleric");
		fight.append('<img src="assets/images/cleric.png" height="150px">');
		fight.append(health.cleric);
		$("#text1").text("Warrior blocked the Cleric's attack!");
		$("#text2").text("Countered for " + specialAtk + " damage! (" + specialCounter + " special(s) remain)");
	}
	//mage's special functions below
	else if (attackingWarrior && mageStore && specialCounter > 0) {
		compAtk = Math.floor((Math.random() * 30) + 20);
		health.mage -= compAtk;
		specialAtk = Math.floor((Math.random() * 40) + 25);
		health.warrior -= specialAtk;
		specialCounter--;
		char2.empty();
		char2.append("Mage");
		char2.append('<img src="assets/images/mage.png" height="150px">');
		char2.append(health.mage);
		fight.empty();
		fight.append("Warrior");
		fight.append('<img src="assets/images/warrior.png" height="150px">');
		fight.append(health.warrior);
		$("#text1").text("Mage cast fireball for " + specialAtk + " damage! (" + specialCounter + " special(s) remain)");
		$("#text2").text("Warrior counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingThief && mageStore && specialCounter > 0) {
		compAtk = Math.floor((Math.random() * 12) + 3);
		health.mage -= compAtk;
		specialAtk = Math.floor((Math.random() * 40) + 25);
		health.thief -= specialAtk;
		specialCounter--;
		char2.empty();
		char2.append("Mage");
		char2.append('<img src="assets/images/mage.png" height="150px">');
		char2.append(health.mage);
		fight.empty();
		fight.append("Thief");
		fight.append('<img src="assets/images/thief.png" height="150px">');
		fight.append(health.thief);
		$("#text1").text("Mage cast fireball for " + specialAtk + " damage! (" + specialCounter + " special(s) remain)");
		$("#text2").text("Thief counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingCleric && mageStore && specialCounter > 0) {
		compAtk = Math.floor((Math.random() * 18) + 5);
		health.mage -= compAtk;
		specialAtk = Math.floor((Math.random() * 40) + 25);
		health.cleric -= specialAtk;
		specialCounter--;
		char2.empty();
		char2.append("Mage");
		char2.append('<img src="assets/images/mage.png" height="150px">');
		char2.append(health.mage);
		fight.empty();
		fight.append("Cleric");
		fight.append('<img src="assets/images/cleric.png" height="150px">');
		fight.append(health.cleric);
		$("#text1").text("Mage cast fireball for " + specialAtk + " damage! (" + specialCounter + " special(s) remain)");
		$("#text2").text("Cleric counter-attacked for " + compAtk + " damage.");
	}
	//thief's special function below
	else if (attackingWarrior && thiefStore && specialCounter > 0) {
		compAtk = Math.floor((Math.random() * 12) + 3);
		health.thief -= compAtk;
		specialAtk = Math.floor((Math.random() * 5) + 1);
		health.warrior -= specialAtk;
		specialCounter--;
		goldRdm = Math.floor((Math.random() * 12) + 5);
		goldTotal += goldRdm;
		char3.empty();
		char3.append("Thief");
		char3.append('<img src="assets/images/thief.png" height="150px">');
		char3.append(health.thief);
		fight.empty();
		fight.append("Warrior");
		fight.append('<img src="assets/images/warrior.png" height="150px">');
		fight.append(health.warrior);
		$("#gold_amt").text(goldTotal);
		$("#text1").text("Thief swiped at the warrior's pockets dealing " + specialAtk + " damage! Stole " + goldRdm + " gold in the process! (" + specialCounter + " special(s) remain)");
		$("#text2").text("Warrior counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingMage && thiefStore && specialCounter > 0) {
		compAtk = Math.floor((Math.random() * 12) + 3);
		health.thief -= compAtk;
		specialAtk = Math.floor((Math.random() * 5) + 1);
		health.mage -= specialAtk;
		specialCounter--;
		goldRdm = Math.floor((Math.random() * 12) + 5);
		goldTotal += goldRdm;
		char3.empty();
		char3.append("Thief");
		char3.append('<img src="assets/images/thief.png" height="150px">');
		char3.append(health.thief);
		fight.empty();
		fight.append("Mage");
		fight.append('<img src="assets/images/mage.png" height="150px">');
		fight.append(health.mage);
		$("#gold_amt").text(goldTotal);
		$("#text1").text("Thief swiped at the mage's pockets dealing " + specialAtk + " damage! Stole " + goldRdm + " gold in the process! (" + specialCounter + " special(s) remain)");
		$("#text2").text("Mage counter-attacked for " + compAtk + " damage.");
	}
	else if (attackingCleric && thiefStore && specialCounter > 0) {
		compAtk = Math.floor((Math.random() * 12) + 3);
		health.thief -= compAtk;
		specialAtk = Math.floor((Math.random() * 5) + 1);
		health.cleric -= specialAtk;
		specialCounter--;
		goldRdm = Math.floor((Math.random() * 12) + 5);
		goldTotal += goldRdm;
		char3.empty();
		char3.append("Thief");
		char3.append('<img src="assets/images/thief.png" height="150px">');
		char3.append(health.thief);
		fight.empty();
		fight.append("Cleric");
		fight.append('<img src="assets/images/cleric.png" height="150px">');
		fight.append(health.cleric);
		$("#gold_amt").text(goldTotal);
		$("#text1").text("Thief swiped at the cleric's pockets dealing " + specialAtk + " damage! Stole " + goldRdm + " gold in the process! (" + specialCounter + " special(s) remain)");
		$("#text2").text("Cleric counter-attacked for " + compAtk + " damage.");
	}
	//Cleric's special function below
	else if ((attackingWarrior || attackingMage || attackingThief) && clericStore && specialCounter > 0) {
		specialAtk = Math.floor((Math.random() * 50) + 35);
		health.cleric += specialAtk;
		specialCounter--;
		if (health.cleric >= 120) {
			health.cleric = 120;
		}
		char4.empty();
		char4.append("Cleric");
		char4.append('<img src="assets/images/cleric.png" height="150px">');
		char4.append(health.cleric);
		$("#text1").text("Cleric used heal to recover " + specialAtk + " damage! (" + specialCounter + " special(s) remain)");
		$("#text2").text("");
	}
	else {
		$("#text1").text("You are out of specials!");
		$("#text2").text("");
	}
	deadCheck();
}

function escapeFunc (e) {
	if (attackingWarrior === false && attackingMage === false && attackingThief === false && attackingCleric === false) {
		$("#text1").text("There is nothing to escape from!");
		$("#text2").text("");
	}
	else {
		$("#text1").text("No fleeing from battle is allowed!");
		$("#text2").text("");
	}
}

function deadCheck () {
	if (health.warrior <= 0 && attackingWarrior){
		fight.empty().css('border', "solid 2px lightgrey");
		attackingWarrior = false;
		warriorDead = true;
		enemies--;
		goldRdm = Math.floor((Math.random() * 20) + 5);
		goldTotal += goldRdm;
		$("#gold_amt").text(goldTotal);
		$("#text1").text("You defeated the Warrior!");
		$("#text2").text("Gained " + goldRdm + " gold.");
		fightsTrue();
	}
	if (health.mage <= 0 && attackingMage){
		fight.empty().css('border', "solid 2px lightgrey");
		attackingMage = false;
		mageDead = true;
		enemies--;
		goldRdm = Math.floor((Math.random() * 20) + 5);
		goldTotal += goldRdm;
		$("#gold_amt").text(goldTotal);
		$("#text1").text("You defeated the Mage!");
		$("#text2").text("Gained " + goldRdm + " gold.");
		fightsTrue();
	}
	if (health.thief <= 0 && attackingThief){
		fight.empty().css('border', "solid 2px lightgrey");
		attackingThief = false;
		thiefDead = true;
		enemies--;
		goldRdm = Math.floor((Math.random() * 20) + 5);
		goldTotal += goldRdm;
		$("#gold_amt").text(goldTotal);
		$("#text1").text("You defeated the Thief!");
		$("#text2").text("Gained " + goldRdm + " gold.");;
		fightsTrue();
	}
	if (health.cleric <= 0 && attackingCleric){
		fight.empty().css('border', "solid 2px lightgrey");
		attackingCleric = false;
		clericDead = true;
		enemies--;
		goldRdm = Math.floor((Math.random() * 20) + 5);
		goldTotal += goldRdm;
		$("#gold_amt").text(goldTotal);
		$("#text1").text("You defeated the Cleric!");
		$("#text2").text("Gained " + goldRdm + " gold.");
		fightsTrue();
	}
	if ((warriorStore && (health.warrior <= 0)) || (mageStore && (health.mage <= 0)) || (thiefStore && (health.thief <= 0)) || (clericStore && (health.cleric <= 0))) {
		$("#text1").text("You have been defeated!");
		restartFunc();
	}
}

function fightsTrue () {
	fightingWarrior = true;
	fightingMage = true;
	fightingThief = true;
	fightingCleric = true;
	if (enemies === 0) {
		$("#text1").text("You are victorious!");
		restartFunc();
	}
}

function fightsFalse () {
	fightingWarrior = false;
	fightingMage = false;
	fightingThief = false;
	fightingCleric = false;
}

var restartFunc = (function() {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            $("#text2").text("");
			$("#text2").append(restart);
			target1.off();
			target2.off();
			target3.off();
			$('#attack_btn').off();
			$('#special_btn').off();
			$('#escape_btn').off();
			$('#potion_buy').off();
			$('#special_buy').off();
        }
    };
})();

restart.on("click", function(){
	location.reload();
});

})