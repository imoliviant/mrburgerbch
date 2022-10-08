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
    var content = "Your current Burger reward is: ";
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
