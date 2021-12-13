let globalScope = 1;

const func = () => {
  let funcscope = 1;
};

for (let i = 0; i < 15; i++) {
  const blockscope = 1;
}

console.log(globalScope, blockscope);
