# IIFE Exercises - Guess the output

For each of the following, try to work out what the output will be. Run the code to check your answer..

1. 
  ```
  var a = 12;
  (function() {
    alert(a);
  })();
  
  ```

2.
  ```
  var a = 5;
  (function() {
    var a = 12;
    alert(a);
  })();

  ```

3. 
  ```
  var a = 10;
  var x = (function() {
    var a = 12;
    return (function() {
      alert(a);
    });
  })();
  x();

  ```

4. 
  ```
  var a = 10;
  var x = (function() {
    var y = function() {
      var a = 12;
    };
    return function() {
      alert(a);
    }
  })();
  x();

  ```

5. 
```

  var a = 10;
  var x = (function() {
    (function() {
      a = 12; // <<< look carefully at this line.
    })();
    return (function() {
      alert(a);
    });
  })();
  x();

```