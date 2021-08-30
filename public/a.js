// const express=require('express')
// const router=express();
// const path=require('path');
// const hbs=require('hbs');


 
var questionsName=["Gcd And Lcm","Inverse Of A Number","Two Sum","Search in Rotated Sorted Array"," 3Sum","Pascal's Triangle","Merge Intervals","Shuffle the Array",
"Matrix Diagonal Sum"," Find Numbers with Even Number of Digits"," Minimum Value to Get Positive Step by Step Sum",
"Maximum Product Difference Between Two Pairs","Single Number","Minimum Absolute Difference","Smallest Range I","Three Consecutive Odds","Transpose Matrix",
"Majority Element","Sort Array By Parity","Sort Array by Increasing Frequency","Next Greater Element I","Best Time to Buy and Sell Stock II",
"Largest Triangle Area","Move Zeroes","Contains Duplicate","Missing Number","Binary Search","Kth Missing Positive Number","Min Cost Climbing Stairs",
"Distance Between Bus Stops","Best Time to Buy and Sell Stock","Maximum Subarray","Find Pivot Index","1-bit and 2-bit Characters","Find Smallest Letter Greater Than Target",
"Plus One","Count Primes","Lucky Numbers in a Matrix","Third Maximum Number","Find All Duplicates in an Array","Permutations","Subsets",
"Single Number III","Bulb Switcher III","Maximum Ice Cream Bars","Beautiful Array","Rotate Image","Combination Sum III","Next Greater Element II",
"Find a Peak Element II","Spiral Matrix II","Container With Most Water","Find And Replace in String","Search a 2D Matrix II","Car Fleet","Next Permutation",
"N-Queens","Median of Two Sorted Arrays","First Missing Positive","Largest Rectangle in Histogram","Greg's Workout","Free Cash","T-primes","k-Strings",
"Next Round","Petr and Book","Life Without Zeros","Round House","Far Relative’s Birthday Cake",
"Bulbs","New Year and Days","Elections","Bear and Elections","Face Detection","Maximum in Table","Cut Ribbon","New Year and Domino","Two Problems","N-Factorful",
"Array fill I","Complicated GCD","Add Two numbers","GCD","EVEN COUNT","New Year Permutation","Easy Sum-2","Bear and Prime Numbers","Little Girl and Maximum XOR",
"k-String","String Task","Power Strings","A+B Problem","String Cutting","Two Substrings","Palindromic Times","Strings with Same Letters","Anagram String",
"Common Divisors","Lucky String","Good Substrings","Prime Palindrome","Longest Common Subsequence",
"Palindrome 2000","String Compression","Print All Palindromic Substrings","Sum of 2050","Pick from both sides!","Min Steps in Infinite Grid",
"Maximum Sum Triplet","Add One To Number","Wave Array","Set Matrix Zeros","Power Of Two Integers","City Tour","Reverse integer","Next Smallest Palindrome!",
"Trailing Zeros in Factorial","Smaller or equal elements","Matrix Search","Implement Power Function","Allocate Books","Matrix Median",
"Square Root of Integer","Valid Number","Zigzag String","Integer To Roman","Multiply Strings","Longest Palindromic Substring","Implement StrStr",
"Valid Parentheses","Number of 1 Bits","Reverse Bits","Divide Integers","Different Bits Sum Pairwise","Count Total Set Bits","XOR-ing the Subarrays!",
"Counting Subarrays!","Add Two Numbers","Middle of the Linked List","Convert Binary Number in a Linked List to Integer","Delete Node in a Linked List",
"Reverse Linked List","Merge Two Sorted Lists","Remove Duplicates from Sorted List",
"Intersection of Two Linked Lists","Linked List Cycle","Palindrome Linked List","Remove Linked List Elements","Merge In Between Linked Lists",
"Design Browser History","Swapping Nodes in a Linked List","Next Greater Node In Linked List","Odd Even Linked List","Swap Nodes in Pairs",
"Convert Sorted List to Binary Search Tree","Sort List","Reverse Linked List II","Linked List Cycle II","Remove Duplicates from Sorted List II",
"Remove Nth Node From End of List","Rotate List","Design Linked List","Reverse Nodes in k-Group","Merge k Sorted Lists","Min Stack","Sliding Window Maximum",
"Rain Water Trapped"];



var questionsLink=["https://www.pepcoding.com/resources/online-java-foundation/getting-started/gcd-and-lcm-official/ojquestion",
"https://www.pepcoding.com/resources/online-java-foundation/getting-started/inverse-of-a-number-official/ojquestion",
"https://leetcode.com/problems/two-sum/","https://leetcode.com/problems/search-in-rotated-sorted-array/","https://leetcode.com/problems/3sum/",
"https://leetcode.com/problems/pascals-triangle/","https://leetcode.com/problems/merge-intervals/","https://leetcode.com/problems/shuffle-the-array/",
"https://leetcode.com/problems/matrix-diagonal-sum","https://leetcode.com/problems/find-numbers-with-even-number-of-digits","https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/",
"https://leetcode.com/problems/maximum-product-difference-between-two-pairs","https://leetcode.com/problems/single-number","https://leetcode.com/problems/minimum-absolute-difference",
"https://leetcode.com/problems/smallest-range-i","https://leetcode.com/problems/three-consecutive-odds","https://leetcode.com/problems/transpose-matrix",
"https://leetcode.com/problems/majority-element","https://leetcode.com/problems/sort-array-by-parity","https://leetcode.com/problems/sort-array-by-increasing-frequency",
"https://leetcode.com/problems/next-greater-element-i","https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii","https://leetcode.com/problems/largest-triangle-area",
"https://leetcode.com/problems/move-zeroes","https://leetcode.com/problems/contains-duplicate","https://leetcode.com/problems/missing-number",
"https://leetcode.com/problems/binary-search","https://leetcode.com/problems/kth-missing-positive-number","https://leetcode.com/problems/min-cost-climbing-stairs",
"https://leetcode.com/problems/distance-between-bus-stops","https://leetcode.com/problems/best-time-to-buy-and-sell-stock","https://leetcode.com/problems/maximum-subarray",
"https://leetcode.com/problems/1-bit-and-2-bit-characters","https://leetcode.com/problems/find-smallest-letter-greater-than-target","https://leetcode.com/problems/plus-one",
"https://leetcode.com/problems/count-primes/","https://leetcode.com/problems/lucky-numbers-in-a-matrix","https://leetcode.com/problems/third-maximum-number",
"https://leetcode.com/problems/find-all-duplicates-in-an-array","https://leetcode.com/problems/permutations","https://leetcode.com/problems/subsets",
"https://leetcode.com/problems/single-number-iii","https://leetcode.com/problems/bulb-switcher-iii","https://leetcode.com/problems/maximum-ice-cream-bars",
"https://leetcode.com/problems/beautiful-array","https://leetcode.com/problems/rotate-image","https://leetcode.com/problems/combination-sum-iii","https://leetcode.com/problems/next-greater-element-ii",
"https://leetcode.com/problems/find-a-peak-element-ii","https://leetcode.com/problems/spiral-matrix-ii","https://leetcode.com/problems/container-with-most-water",
"https://leetcode.com/problems/find-and-replace-in-string","https://leetcode.com/problems/search-a-2d-matrix-ii","https://leetcode.com/problems/car-fleet/",
"https://leetcode.com/problems/next-permutation","https://leetcode.com/problems/n-queens/","https://leetcode.com/problems/median-of-two-sorted-arrays",
"https://leetcode.com/problems/first-missing-positive","https://leetcode.com/problems/largest-rectangle-in-histogram/","http://codeforces.com/problemset/problem/255/A",
"http://codeforces.com/problemset/problem/237/A","http://codeforces.com/problemset/problem/230/B","http://codeforces.com/problemset/problem/219/A",
"http://codeforces.com/problemset/problem/158/A","http://codeforces.com/problemset/problem/139/A","http://codeforces.com/problemset/problem/75/A","http://codeforces.com/problemset/problem/659/A",
"http://codeforces.com/problemset/problem/629/A","http://codeforces.com/problemset/problem/615/A","http://codeforces.com/problemset/problem/611/A",
"http://codeforces.com/problemset/problem/570/A","http://codeforces.com/problemset/problem/574/A","http://codeforces.com/problemset/problem/549/A","http://codeforces.com/problemset/problem/509/A",
,"http://codeforces.com/problemset/problem/189/A","http://codeforces.com/problemset/problem/611/C","http://codeforces.com/problemset/problem/203/A",
"http://www.spoj.com/problems/NFACTOR/","https://www.urionlinejudge.com.br/judge/en/problems/view/1173","http://codeforces.com/problemset/problem/664/A",
"https://a2oj.com/p?ID=344","https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=2412","http://www.spoj.com/problems/GEEKOUNT/",
"http://codeforces.com/problemset/problem/500/B","https://a2oj.com/p?ID=155","Bear and Prime Numbers","http://codeforces.com/problemset/problem/276/D",
"http://codeforces.com/problemset/problem/219/A","http://codeforces.com/problemset/problem/118/A","https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=1239",
"http://poj.org/problem?id=1000","https://icpcarchive.ecs.baylor.edu/index.php?option=onlinejudge&page=show_problem&problem=1670",
"http://codeforces.com/problemset/problem/550/A","http://codeforces.com/problemset/problem/108/A","https://a2oj.com/p?ID=184",
"https://a2oj.com/p?ID=132","http://codeforces.com/problemset/problem/182/D","http://codeforces.com/problemset/problem/110/B",
"http://codeforces.com/problemset/problem/271/D","https://a2oj.com/p?ID=366","https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=1346",
"http://www.spoj.com/problems/IOIPALIN/","https://www.pepcoding.com/resources/online-java-foundation/string,-string-builder-and-arraylist/string-compression-official/ojquestion",
"https://www.pepcoding.com/resources/online-java-foundation/string,-string-builder-and-arraylist/print-all-palindromic-substrings-official/ojquestion",
"https://codeforces.com/contest/1517/problem/A","https://www.interviewbit.com/problems/pick-from-both-sides/","https://www.interviewbit.com/problems/min-steps-in-infinite-grid/",
"https://www.interviewbit.com/problems/maximum-sum-triplet/","https://www.interviewbit.com/problems/add-one-to-number/","https://www.interviewbit.com/problems/wave-array/",
"https://www.interviewbit.com/problems/set-matrix-zeros/","https://www.interviewbit.com/problems/power-of-two-integers/","https://www.interviewbit.com/problems/city-tour/",
"https://www.interviewbit.com/problems/reverse-integer/","https://www.interviewbit.com/problems/next-smallest-palindrome/","https://www.interviewbit.com/problems/trailing-zeros-in-factorial/",
"https://www.interviewbit.com/problems/smaller-or-equal-elements/",
"https://www.interviewbit.com/problems/matrix-search/","https://www.interviewbit.com/problems/implement-power-function/","https://www.interviewbit.com/problems/allocate-books/",
"https://www.interviewbit.com/problems/matrix-median/","https://www.interviewbit.com/problems/square-root-of-integer/",
"https://www.interviewbit.com/problems/valid-number/","https://www.interviewbit.com/problems/zigzag-string/","https://www.interviewbit.com/problems/integer-to-roman/",
"https://www.interviewbit.com/problems/multiply-strings/","https://www.interviewbit.com/problems/longest-palindromic-substring/","https://www.interviewbit.com/problems/implement-strstr/",
"https://leetcode.com/problems/valid-parentheses/","https://www.interviewbit.com/problems/number-of-1-bits/","https://www.interviewbit.com/problems/reverse-bits/",
"https://www.interviewbit.com/problems/divide-integers/","https://www.interviewbit.com/problems/different-bits-sum-pairwise/","https://www.interviewbit.com/problems/count-total-set-bits/",
"https://www.interviewbit.com/problems/xor-ing-the-subarrays/","https://www.interviewbit.com/problems/counting-subarrays/","https://leetcode.com/problems/add-two-numbers",
"https://leetcode.com/problems/middle-of-the-linked-list","https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer","https://leetcode.com/problems/delete-node-in-a-linked-list",
"https://leetcode.com/problems/reverse-linked-list","https://leetcode.com/problems/merge-two-sorted-lists","https://leetcode.com/problems/remove-duplicates-from-sorted-list",
"https://leetcode.com/problems/intersection-of-two-linked-lists","https://leetcode.com/problems/linked-list-cycle","https://leetcode.com/problems/palindrome-linked-list",
"https://leetcode.com/problems/remove-linked-list-elements","https://leetcode.com/problems/merge-in-between-linked-lists","https://leetcode.com/problems/design-browser-history",
"https://leetcode.com/problems/swapping-nodes-in-a-linked-list","https://leetcode.com/problems/next-greater-node-in-linked-list",
"https://leetcode.com/problems/odd-even-linked-list","https://leetcode.com/problems/swap-nodes-in-pairs","https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree",
"https://leetcode.com/problems/sort-list","https://leetcode.com/problems/reverse-linked-list-ii","https://leetcode.com/problems/linked-list-cycle-ii"
,"https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii","https://leetcode.com/problems/remove-nth-node-from-end-of-list","https://leetcode.com/problems/rotate-list",
"https://leetcode.com/problems/design-linked-list","https://leetcode.com/problems/reverse-nodes-in-k-group","https://leetcode.com/problems/merge-k-sorted-lists",
"https://www.interviewbit.com/problems/min-stack/","https://www.interviewbit.com/problems/sliding-window-maximum/",
"https://www.interviewbit.com/problems/rain-water-trapped/"];

// var body=document.querySelector('body')


// const email=document.getElementById('user');
// // console.log(email.innerHTML)




// const button = document.getElementById('myButton');
// button.addEventListener('click', function(e) {
//   console.log('button was clicked');

//   fetch('/clicked', {method: 'POST'})
//     .then(function(response) {
//       if(response.ok) {
//         console.log('Click was recorded');
//         return email.innerHTML;
//       }
//       throw new Error('Request failed.');
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });






function check()
{




    const button=document.querySelector('button')
    // const elems=document.getElementsByClassName('show')

    const main_div=document.createElement('div');
             main_div.setAttribute('id','maindiv')

    for(let i=0;i<questionsName.length;i++)
    {
     
        //question number
       const div1=document.createElement('div');
       const div1Text=document.createTextNode(`${i+1}.`)
       div1.setAttribute('class','question_Number')
       div1.appendChild(div1Text)
       main_div.appendChild(div1)


       //button part with link
       const div2=document.createElement('div')
       div2.setAttribute('class','btn')
       const button=document.createElement('button');
       button.setAttribute('id','myButton')
       const a= document.createElement('a')
       a.setAttribute('href',`${questionsLink[i]}`)
       button.appendChild(a)
        a.setAttribute('target',"_blank")
        a.setAttribute('name',"question"+i)
      const btnText= document.createTextNode('Attempt')
       a.appendChild(btnText)
       div2.appendChild(button)
       main_div.appendChild(div2)
       
       //question name
        const div=document.createElement('div');
        div.classList.add('question')
        div.setAttribute('name',"question"+i)
        const divText=document.createTextNode(questionsName[i]);
       div.appendChild(divText);
      main_div.appendChild(div);
     
    }
    document.body.appendChild(main_div)
   button.removeAttribute('onClick');   
   button.remove();
  
 

  }
