from file_system import FileSystem

class WindowsFileSystem(FileSystem):
  def createFile(self):
    print("creating new file in windows style")

  def deleteFile(self):
    print("deleting file in windows style")
