const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello world');

    // Interpolated
    console.log('Hello I am %s string!', '💩') // replaced by template literals but still works

    // Styled
    console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue') // %c and enter styles as second variable

    // warning!
    console.warn('OH NOOO');

    // Error :|
    console.error('An error!');

    // Info
    console.info("AI will simultaneously replace and catalyze us");
    
    // Testing
    console.assert(1 === 2, 'Dude, are you serious??') // simple

    const p = document.querySelector('p'); // more advanced using DOM
    console.assert(p.classList.contains('ouch'), `That ain't it, man!`);

    // clearing
    console.clear()

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
      console.group(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old!`);
      console.log(`${dog.name} is ${dog.age * 7} years old!`);
      console.groupEnd( `${dog.name}`)
    });
    // counting

    console.count('Me')
    console.count('Me')
    console.count('Me')
    console.count('You');
    console.count('Me')
    console.count('Me')
    console.count('You');
    console.count('Me')
    console.count('Me')
    console.count('Me')
    console.count('You');
    console.count('You');
    console.count('You');
    console.count('You');
    console.count('Me')
    console.count('Me')
    console.count('Me')

    // timing

    console.time('fetching data');
    fetch('https://catfact.ninja/fact')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data') //same string as intiialized above with console.time
        console.log(data);
      })

    // table
    console.table(dogs)