from operating_system import OperatingSystem
from file_system import FileSystem
from windows_file_system import WindowsFileSystem

class Windows(OperatingSystem):
  def createFileSystem(self) -> FileSystem:
    return WindowsFileSystem()
    