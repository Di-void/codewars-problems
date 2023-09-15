function isPangram(string) {
  if (string.trim() !== "") {
    const test_string = new Set([
      ...string.replace(/[^a-zA-Z]/g, "").toLowerCase(),
    ]);
    if (test_string.size === 26) return true;
  }
  return false;
}

let test_string = "";
//! TEST CASES
console.log(isPangram(test_string)); //! FALSE

test_string = "abcdefghijklmnopqrstuvwxyz";
console.log(isPangram(test_string)); //* TRUE

test_string = "abbcdeffffgh123 ij kl';mnopqrstuvwxyz";
console.log(isPangram(test_string)); //* TRUE

test_string = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(test_string)); //* TRUE

test_string = "a b c def 123";
console.log(isPangram(test_string)); //! FALSE
