// Stake
function approve() {
    var amount1 = $("#amount1").val();
    var amount2 = amount1;
    var amount3 = amount2.toString();
    var content = "Approving transaction from: ";
    content += burgerCook;
    $("#burger1").html(content);
    var event = contractBurger.methods.approve("0xfb31e9ED82233c23c3839CDA2a6D5c03fd81314A", amount3).send({ from: burgerCook })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("#burger1").html(content);
        });;
};

function stakeTokens() {
    var amount1 = $("#amount1").val();
    var amount2 = amount1;
    var amount3 = amount2.toString();
    var content = "Sending transaction from: ";
    content += burgerCook;
    $("#burger1").html(content);
    var event = contractBurgerStake.methods.stakeTokens(amount3).send({ from: burgerCook })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! Staked!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("#burger1").html(content);
        });;
};
    
function stakingBalance() {
    var event = contractBurgerStake.methods.stakingBalance(burgerCook).call()
        .then(function (result) {
    var content = "Your Burger balance staked is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#burger2").html(content);
        });;
};

function calculateReward() {
    var event = contractBurgerStake.methods.calculateReward().call({ from: burgerCook })
        .then(function (result) {
    var content = "Your current xBurger reward is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#burger3").html(content);
        });;
};
    
function unstakeTokens() {
    var content = "Sending transaction from: ";
    content += burgerCook;
    $("#burger4").html(content);
    var event = contractBurgerStake.methods.unstakeTokens().send({ from: burgerCook })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! ";
    content += JSON.stringify(receipt.transactionHash);
    $("#burger4").html(content);
        });;
};
function stakedToken() {
    var event = contractBurger.methods.balanceOf("0xfb31e9ED82233c23c3839CDA2a6D5c03fd81314A").call()
         .then(function(result) {
             var content = "Burgers on Contract: ";
             content += JSON.stringify(result.toString() / 1000000000000000000);
             $("#burger5").html(content);
         });;
};
function xBurgersCA() {
    var event = contractXBurger.methods.balanceOf("0xfb31e9ED82233c23c3839CDA2a6D5c03fd81314A").call()
         .then(function(result) {
             var content = "XBurgers left to distribute: ";
             content += JSON.stringify(result.toString() / 100000000);
             $("#burger7").html(content);
         });;
};
function walletBalance() {
    var event = contractBurger.methods.balanceOf(burgerCook).call()
        .then(function (result) {
    var content = "Your Burger balance on wallet is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#burger6").html(content);
        });;
};

// approve MLP
function approveMLP() {
    var amount1 = $("#amount1").val();
    var amount2 = amount1;
    var amount3 = amount2.toString();
    var content = "Approving transaction from: ";
    content += burgerCook;
    $("#burger8").html(content);
    var event = contractBurger.methods.approve("0x28059f921324Aa6C845176f7e05a29854D8d90B0", amount3).send({ from: burgerCook })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("#burger8").html(content);
        });;
};

// stake MLP
function stakeMLP() {
    var amount1 = $("#amount1").val();
    var amount2 = amount1;
    var amount3 = amount2.toString();
    var content = "Sending transaction from: ";
    content += burgerCook;
    $("#burger8").html(content);
    var event = contractMLPStake.methods.stakeTokens(amount3).send({ from: burgerCook, value: 1000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! Staked!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("#burger8").html(content);
        });;
};

// mlp staking balance
function stakingBalanceMLP() {
    var event = contractMLPStake.methods.stakingBalance(burgerCook).call()
        .then(function (result) {
    var content = "Your MLP balance staked is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#burger9").html(content);
        });;
};

// rewards for staking MLP
function calculateRewardMLP() {
    var event = contractMLPStake.methods.calculateReward().call({ from: burgerCook })
        .then(function (result) {
    var content = "Your current SPICE reward is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#burger10").html(content);
        });;
};

// unstake your staked MLP & receive your income.
function unstakeTokensMLP() {
    var content = "Sending transaction from: ";
    content += burgerCook;
    $("#burger11").html(content);
    var event = contractMLPStake.methods.unstakeTokens().send({ from: burgerCook })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! ";
    content += JSON.stringify(receipt.transactionHash);
    $("#burger11").html(content);
        });;
};
function walletBalanceMLP() {
    var event = contractMistLP.methods.balanceOf(burgerCook).call()
        .then(function (result) {
    var content = "Your MLP balance on wallet is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("#burger6").html(content);
        });;
};
