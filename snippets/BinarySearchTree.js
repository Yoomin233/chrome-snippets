{
    class BST {
        constructor() {
            this.root = null;
        }
        insert(data) {
            if (!this.root) {
                this.root = this.createNode(data, null, null)
            } else {
                let parent = this.root
                while (true) {
                    if (parent.data > data) {
                        //                         parent = parent.left
                        if (parent.left === null) {
                            parent.left = this.createNode(data, null, null);
                            break;
                        } else {
                            parent = parent.left
                        }
                    } else if (parent.data < data) {
                        //                         parent = parent.right
                        if (parent.right === null) {
                            parent.right = this.createNode(data, null, null);
                            break;
                        } else {
                            parent = parent.right
                        }
                    }
                }

            }
        }
        createNode(data, left, right) {
            return ({
                data,
                left: left || null,
                right: right || null
            })
        }
    }
    const bst = new BST();
    bst.insert(50);
    bst.insert(60);
    bst.insert(40);
    bst.insert(45);
    bst.insert(80);
    bst.insert(42);
    console.log(bst);

    // 遍历树
    // 中序遍历(左根右)
    function inOrder(node) {
        if (node !== null) {
            inOrder(node.left);
            console.log(node.data);
            inOrder(node.right);
        }
    }
//     inOrder(bst.root)

    // 二叉树查找
    function getMin(bst) {
        let current = bst.root
        for (;current === null; current = current.left)
        return current;

    }
    getMin(bst);
}
