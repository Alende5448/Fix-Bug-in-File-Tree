import FileTree from './fileTree';

export function createFileTree(input) {

let parent = [];
let child = [];

for(let i = 0; i < input.length; i++){
  if(input[i]["parentId"]){
    child.push(input[i])
  }else {
    parent.push(input[i])
  }
}

for(let i = 0; i < parent.length; i++){
  for(let j = 0; j < child.length; j++){
    if(parent[i].id === child[j].parentId){
      parent.push(child[j])
    }
  }
  input = parent
}

  const fileTree = new FileTree();

  for (const inputNode of input) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;

    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }

  return fileTree;
}