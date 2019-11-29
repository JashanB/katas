let calculateChange = function(total, cash) {
let change = {
  twentyDollar: function(money) {
    return Math.floor(money)
  }
  tenDollar: '',
  fiveDollar: '',
  twoDollar: '',
  oneDollar: '',
  quarter: '',
  dime: '',
  nickel: '',
  penny: ''
}
let amount = cash - total
if (amount/2000 >=1) {
  change.twentyDollar = Math.floor(amount/2000)
  return change.twentyDollar
  amount = amount - (change.twentyDollar)*2000 
}
if (amount/1000 >=1) {
  change.tenDollar = Math.floor(amount/1000)
  return change.tenDollar
  amount = amount - (change.tenDollar)*1000 
}
if (amount/500 >=1) {
  change.fiveDollar = Math.floor(amount/500)
  return change.fiveDollar
  amount = amount - (change.fiveDollar)*500 
}
if (amount/200 >=1) {
  change.twentyDollar = Math.floor(amount/200)
  return change.twoDollar
  amount = amount - (change.twoDollar)*200 
}
if (amount/100 >=1) {
  change.oneDollar = Math.floor(amount/100)
  return change.oneDollar
  amount = amount - (change.oneDollar)*100 
}
if (amount/25 >=1) {
  change.quarter = Math.floor(amount/25)
  return change.quarter
  amount = amount - (change.quarter)*25
}
if (amount/10 >=1) {
  change.twentyDollar = Math.floor(amount/10)
  return change.dime
  amount = amount - (change.dime)*10
}
if (amount/5 >=1) {
  change.twentyDollar = Math.floor(amount/5)
  return change.nickel
  amount = amount - (change.nickel)*5 
}
if (amount/1 >=1) {
  change.penny = Math.floor(amount/1)
  return change.penny
}

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

let calculateChange = function(total, cash) {
  let change = {
    twentyDollar: '',
    tenDollar: '',
    fiveDollar: '',
    twoDollar: '',
    oneDollar: '',
    quarter: '',
    dime: '',
    nickel: '',
    penny: ''
  }
  let amount = cash - total
  if (amount/2000 >=1) {
    change.twentyDollar = Math.floor(amount/2000)
    return change.twentyDollar
    amount = amount - (change.twentyDollar)*2000 
  }
  if (amount/1000 >=1) {
    change.tenDollar = Math.floor(amount/1000)
    return change.tenDollar
    amount = amount - (change.tenDollar)*1000 
  }
  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));

  let calculateChange = function(total, cash) {
    let change = {
      twentyDollar: function(money) {
        return 'twentyDollar: ' + Math.floor(money)
      },
      tenDollar: function(money) {
        return 'tenDollar: ' + Math.floor(money)
      },
      fiveDollar: function(money) {
        return 'fiveDollar: ' + Math.floor(money)
      },
      twoDollar: function(money) {
        return 'twoDollar: ' + Math.floor(money)
      },
      oneDollar: function(money) {
        return 'oneDollar: ' + Math.floor(money)
      },
      quarter: function(money) {
        return 'quarter: ' + Math.floor(money)
      },
      dime: function(money) {
        return 'dime: ' + Math.floor(money)
      },
      nickel: function(money) {
        return 'nickel: ' + Math.floor(money)
      },
      penny: function(money) {
        return 'penny: ' + Math.floor(money)
      }
    }
    let amount = cash - total
    if (amount/2000 >=1) {
      change.twentyDollar(amount/2000)
      amount = amount - ((Math.floor(amount/2000))*2000) 
    }
    if (amount/1000 >=1) {
      change.tenDollar(amount/1000)
      amount = amount - ((Math.floor(amount/1000))*1000)
    }
    if (amount/500 >=1) {
      change.fiveDollar(amount/500)
      amount = amount - ((Math.floor(amount/500))*500)
    }
    if (amount/200 >=1) {
      change.twoDollar(amount/200)
      amount = amount - ((Math.floor(amount/200))*200) 
    }
    if (amount/100 >=1) {
      change.oneDollar(amount/100)
      amount = amount - ((Math.floor(amount/100))*100) 
    }
    if (amount/25 >=1) {
      change.quarter(amount/25)
      amount = amount - ((Math.floor(amount/25))*25)
    }
    if (amount/10 >=1) {
      change.dime(amount/10)
      amount = amount - ((Math.floor(amount/10))*10)
    }
    if (amount/5 >=1) {
      change.nickel(amount/5)
      amount = amount - ((Math.floor(amount/5))*5)
    }
    if (amount/1 >=1) {
      change.penny(amount/1)
    }
    
    };





    let calculateChange = function(total, cash) {
      let change = {
      }
      let amount = cash - total
      let changeArray = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
      let changeText = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny']
      let number = 0
      for (let i = 0; i <changeArray.length; i++) {
        if (amount/changeArray[i] >=1) {
            number = Math.floor(amount/changeArray[i])
            change[changeText[i]] = number
            amount -= number*changeArray[i]
        }
      }
      return change
    }
      console.log(calculateChange(1787, 2000));
      console.log(calculateChange(2623, 4000));
      console.log(calculateChange(501, 1000)); 