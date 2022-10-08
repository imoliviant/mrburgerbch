// Stake
function approve() {
    var amount1 = $("#amount1").val();
    var amount2 = amount1 *100000000;
    var amount3 = amount2.toString();
    var content = "Approving transaction from: ";
    content += burgerCook;
    $("").html(content);
    var event = contractBurgerStake.methods.approve("0x2efDE281498838C5405b4284d87aC319117e9B3C", amount3).send({ from: burgerCook })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Approved!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("").html(content);
        });;
};

function stakeTokens() {
    var amount1 = $("#amount1").val();
    var amount2 = amount1 *100000000;
    var amount3 = amount2.toString();
    var content = "Sending transaction from: ";
    content += burgerCook;
    $("").html(content);
    var event = contractBurgerStake.methods.stakeTokens(amount3).send({ from: burgerCook })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! Staked!: ";
    content += JSON.stringify(receipt.transactionHash);
    $("").html(content);
        });;
};
    
function stakingBalance() {
    var event = contractBurgerStake.methods.stakingBalance(burgerCook).call()
        .then(function (result) {
    var content = "Your Burger balance staked is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("").html(content);
        });;
};

function calculateReward() {
    var event = contractBurgerStake.methods.calculateReward().call({ from: burgerCook })
        .then(function (result) {
    var content = "Your current Burger reward is: ";
    content += JSON.stringify(result.toString() / 1000000000000000000);
    $("").html(content);
        });;
};
    
function unstakeTokens() {
    var content = "Sending transaction from: ";
    content += burgerCook;
    $("#lang10").html(content);
    var event = contractBurgerStake.methods.unstakeTokens().send({ from: burgerCook })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent! ";
    content += JSON.stringify(receipt.transactionHash);
    $("").html(content);
        });;
};
