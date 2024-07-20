from operating_system import OperatingSystem
from mac_file_system import MacFileSystem
from file_system import FileSystem

class Mac(OperatingSystem):
  def createFileSystem(self) -> FileSystem:
    return MacFileSystem()
