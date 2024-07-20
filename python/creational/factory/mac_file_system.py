from file_system import FileSystem

class MacFileSystem(FileSystem):
  def createFile(self):
    print("creating file in mac style")

  def deleteFile(self):
    print("deleting file in mac style")
