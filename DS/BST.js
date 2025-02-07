class Node {
    constructor(data,left=null,right=null)
    {
        this.data = data
        this.right = right
        this.left = left
    }
}
class BST {
    constructor()
    {
        this.root = null
    }
    add(data)
    {
        const node = this.root
        if( node === null )
        {
            this.root = new Node(data)
            return
        }
        else {
            const searchTree = function (node)
            {
                if ( data < node.data )
                {
                    if ( node.left === null)
                    {
                        node.left = new Node (data)
                        return
                    }
                    else if ( node.left !== null )
                    {
                         return searchTree(node.left)
                    }
                }
                else if ( data > node.data)
                {
                     if ( node.right === null )
                    {
                        node.right = new Node(data)
                        return
                    }
                    else if ( node.right !== nulll )
                    {
                        return searchTree(node.right)
                    }
                }
                else {
                    return null
                }
            }
            return searchTree(node)
        }
    }
    findmin(data)
    {
        let current = this.root
        while ( current.left !== null )
        {
            current = current.left
        }
        return current.data
    }
    findmax(data)
    {
        let current = this.root
        while( current.right !== null )
        {
            current = current.right
        }
        return current.data
    }
    isPresent(data)
    {
        let current = this.root
        while ( current )
        {
        if ( data === current.data )
        {
            return true
        }
        else if ( data < current.data )
        {
           
           current = current.left
        }
        else {
            current = current.right
        }
    }
    return false
    }
    removeData(data)
    {
        const removeNode = function ( node , data)
        {
            if ( node === null)
            {
                return null
            }
            if ( data === node.data )
            {
                if ( node.left === null && node.right === null )
                {
                    return null
                }
                if ( node.left === null )
                {
                    return node.right
                }
                if ( node.right === null )
                {
                    return node.left
                }
                var tempNode = node.right
                while (tempNode.left !== null )
                {
                    tempNode = tempNode.left
                }
                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data )
                return node
            }
            else if ( data < node.data )
            {
                node.left = removeNode(node.left , data)
                return node
            }
            else {
                node.right = removeNode(node.right,data )
                return node
            }

        }
        this.root =  removeNode(this.root , data )
    }

}

const bst = new BST
bst.add(4)
bst.add(6)
bst.add(3)
console.log(bst.isPresent(6))
console.log(bst.isPresent(10))
console.log(bst.findmax())
console.log(bst.findmin())
bst.removeData(3)
z
// console.log(node)