export default {
  changeImagePosition(index, top, left) {
    return {
      type: 'MOVE_IMAGE',
      new: {
        index,
        top,
        left
      }
    }
  }
}
