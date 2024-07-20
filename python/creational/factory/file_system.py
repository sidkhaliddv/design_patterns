from abc import ABC, abstractmethod

class FileSystem(ABC):
  @abstractmethod
  def createFile(self):
    pass
  
  @abstractmethod
  def deleteFile(self):
    pass
