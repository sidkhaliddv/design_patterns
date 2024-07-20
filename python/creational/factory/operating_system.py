from abc import ABC, abstractmethod
from file_system import FileSystem

class OperatingSystem(ABC):

  @abstractmethod
  def createFileSystem(self) -> FileSystem:
    pass

  def createFile(self):
    fs = self.createFileSystem()
    fs.createFile()