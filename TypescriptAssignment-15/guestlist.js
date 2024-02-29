"use strict";
let guest = ["Sir Zia Khan", "Kamran Khan Tessori", "Sir Daniyal Nagori"];
console.log(`My honourable guest ${guest[2]} cannot join us due to their some personal issues.`);
guest[2] = "Miss Hina Naseer";
console.log("My new guest list:");
for (let i = 0; i < guest.length; i++) {
    console.log(`${i} = ${guest[i]}`);
}
