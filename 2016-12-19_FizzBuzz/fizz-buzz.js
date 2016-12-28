function isOdd(value) {
  return value % 2 == 0;
}

function sumOfDigits(number) {
  var digits = number.toString().split('');
    return digits.reduce(function( accumulator, currentValue) {
        return accumulator + parseInt(currentValue);
    }, 0);
}

function isDividableByFive(value) {
  return value % 5 === 0;
}

function isDividableByThree(value) {
  return value % 3 === 0;
}

function containsDigitThree(value) {
  return value.toString().indexOf(3) != -1;
}

function fizzBuzz(value) {

  if(containsDigitThree(value)
    && isDividableByFive(value)
    && isDividableByThree(value)
    && isOdd(sumOfDigits(value))) {

    return "FizzBuzz";
  }

  if (containsDigitThree(value)) {
    return 'Fizz';
  }

  if (isDividableByThree(value) && isDividableByFive(value)) {
    return "FizzBuzz";
  }

  if (isDividableByThree(value)) {
    return "Fizz";
  }

  if (isDividableByFive(value)) {
    return "Buzz";
  }

  return value.toString()
}

describe('Fizz buzz function', function() {

  it('should return FizzBuzz for 3300', function() {
    expect(fizzBuzz(3300)).toBe("FizzBuzz");
  });

  it('should return FizzBuzz for 330', function() {
    expect(fizzBuzz(330)).toBe("FizzBuzz");
  });

  it('should return Fizz if it contains 3', function() {

    expect(fizzBuzz(30)).toBe("Fizz");

    expect(fizzBuzz(13)).toBe("Fizz");
    expect(fizzBuzz(31)).toBe("Fizz");
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it('should return Buzz for 10', function() {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it('should return Fizz for 6', function() {
    expect(fizzBuzz(6)).toBe("Fizz");
  });
  it('should return 1 for 1', function() {
    expect(fizzBuzz(1)).toBe("1");
  });

  it('should return 2 for 2', function() {
    expect(fizzBuzz(2)).toBe("2");
  });

  it('should return Fizz for 3', function() {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it('should return Buzz for 5', function() {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it('should return FizzBuzz for 15', function() {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it('should return 47 for 47', function() {
    expect(fizzBuzz(47)).toBe("47");
  });
});

describe('sumOfDigits', function(){
  it('should return sum of digits', function() {
    expect(sumOfDigits(123)).toBe(6);
  });
});