module.exports = {
  testPathForConsistencyCheck: "some/app/__tests__/example.test.js",
  //setting path for the created snapshot files
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    const updatedSnapshotPath = testPath + snapshotExtension;
    //returns 'some/app/__tests__/example.test.js.snap' for above example
    return updatedSnapshotPath;
  },

  //setting path to test the files
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    //removing snapshotExtension i.e '.snap' from snapshotFilePath
    const updatedTestPath = snapshotFilePath.slice(
      0,
      -snapshotExtension.length
    );
    //returns 'some/app/__tests__/example.test.js' for above example
    return updatedTestPath;
  },
};
