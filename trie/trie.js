class Node {
  constructor(end = false) {
    this.children = {}
    this.end = end;
  }
}

class Trie {
  constructor() {
    this.root = new Node() 
  }

  insertWord(word) {
    this.current = this.root;

    const letters = word.split("");
    for (let i=0; i < letters.length; i++) {
      const isEndOfWord = (i+1) === letters.length;
      if (letters[i] in this.current.children) {
        this.current.children[letters[i]].end = (this.current.children[letters[i]].end || isEndOfWord);
      } else {
        this.current.children[letters[i]] = new Node(isEndOfWord);
      }
      this.current = this.current.children[letters[i]];
    }
  }

  patternSearch(word, level, startsWithMode = false) {
    this.current = level;

    const letters = word.split("");

    
    for(let i = 0; i < letters.length; i++) {
      const isEndOfWord = (i+1) === letters.length;

      if (letters[i] in this.current.children) {
        // console.log('found', letters[i]);
        this.current = this.current.children[letters[i]];

        // console.log(this.current);
        // console.log(isEndOfWord);
        if (this.current.end && isEndOfWord) {

          return true;
        } else if (isEndOfWord) {
          if (startsWithMode) {
            return true
          } else {
            return false;
          }
        }
      } else {
        // console.log('not found', letters[i]);

        return false
      }

    }
  }


  wordSearch(word) {
    console.log(this.patternSearch(word, this.root));
  }

  startsWith(word) {
    console.log(this.patternSearch(word, this.root, true));
  }

  prettyPrint() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}

const t = new Trie();
t.insertWord("ab");

t.insertWord("abcd");
// t.prettyPrint();
t.insertWord("abrt");
// t.prettyPrint();
t.insertWord("abc");
t.prettyPrint();

// t.wordSearch("abcd");
// t.wordSearch("ab");
// t.wordSearch("abrt");
// // t.wordSearch("abc");
// t.wordSearch("abcf");
// t.wordSearch("abc");

t.wordSearch("ab");
t.wordSearch("abc");
t.wordSearch("abcd");
t.wordSearch("ab");
// t.startsWith("a");
// t.startsWith("ab");
// t.startsWith("abr");
// t.startsWith("abrt");
// t.startsWith("lm");