export default class StaticHeap {

  constructor(data) {
    this._heapArray = [];

    if (data) {
      this.heapify(data);
    }
  }

  size() {
    return this._heapArray.length;
  }

  _swap(i, j) {
    let value = this._heapArray[i];
    this._heapArray[i] = this._heapArray[j];
    this._heapArray[j] = value;
  }

  _getParentIndex(i) {
    if ((i & 1) === 0) {
      return (i - 1) >> 1;
    }

    return i >> 1;
  }

  _getLeftChildIndex(i) {
    return (i << 1) + 1;
  }

  _getRightChildIndex(i) {
    return (i + 1) << 1;
  }

  _bigger(i, j) {
    return this._heapArray[i].priority > this._heapArray[j].priority ? i : j;
  }

  _isValid(n, i) {
    return 0 <= i && i <= n;
  }

  _properParent(n, i) {
    let leftChildIndex = this._getLeftChildIndex(i);
    let rightChildIndex = this._getRightChildIndex(i);

    if (this._isValid(n, leftChildIndex) && this._isValid(n, rightChildIndex)) {
      return this._bigger(i, this._bigger(leftChildIndex, rightChildIndex));
    } else if (!this._isValid(n, leftChildIndex) && this._isValid(n, rightChildIndex)) {
      return this._bigger(i, rightChildIndex);
    } else if (!this._isValid(n, rightChildIndex) && this._isValid(n, leftChildIndex)) {
      return this._bigger(i, leftChildIndex);
    }

    return i;
  }

  _percolateDown(n, i) {
    let j = this._properParent(n, i);

    while (j !== i) {
      this._swap(i, j);
      i = j;
      j = this._properParent(n, i);
    }
  }

  heapify(array) {
    this._heapArray = array;

    let lastIndex = this._heapArray.length - 1;
    let lastInternal = this._getParentIndex(lastIndex);

    for (let i = lastInternal; i >= 0; i--) {
      this._percolateDown(lastIndex, i);
    }
  }

  getMax(n) {
    if (n === undefined) {
      return this._heapArray[0];
    }

    if (n >= this._heapArray.length) {
      return this._heapArray;
    } else {
      return this._heapArray.slice(n);
    }
  }
}
