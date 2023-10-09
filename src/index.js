// Importing each function from its respective module
import { connect } from './connect';
import { disconnect } from './disconnect';
import { createRecord } from './createRecord';
import { queryRecords } from './queryRecords';
import { bulkInsert } from './bulkInsert';
import { listAllVerbs } from './listAllVerbs';
import { listAllActors } from './listAllActors';
import { visualizeData } from './visualizeData';
import { aggregateStatements } from './aggregateStatements';
import { getLRSStats } from './getLRSStats';
import { groupStatementsByDate } from './groupStatementsByDate';
import { analyzeActivityInteractions } from './analyzeActivityInteractions';
import { getAverageScoreByActivity } from './getAverageScoreByActivity';
import { checkDatabaseHealth } from './checkDatabaseHealth';
import { backupDatabase } from './backupDatabase';
import { restoreDatabaseFromBackup } from './restoreDatabaseFromBackup';
import { resetDatabase } from './resetDatabase';
import { bulkStoreStatements } from './bulkStoreStatements';
import { exportStatements } from './exportStatements';
import { importStatements } from './importStatements';
import { registerNewVerb } from './registerNewVerb';
import { registerNewActivityType } from './registerNewActivityType';
import { validateStatement } from './validateStatement';
import { checkStatementAgainstProfile } from './checkStatementAgainstProfile';
import { interactiveMode } from './interactiveMode';
import { generateStatementTemplate } from './generateStatementTemplate';
import { searchStatementsByContent } from './searchStatementsByContent';
import { listAllObjectTypes } from './listAllObjectTypes';
import { visualizeActorProgress } from './visualizeActorProgress';
import { setStatementAuthority } from './setStatementAuthority';
import { getMostActiveActors } from './getMostActiveActors';
import { visualizeVerbUsage } from './visualizeVerbUsage';
import { listAllExtensions } from './listAllExtensions';
import { getStatementsByDuration } from './getStatementsByDuration';

// Exporting all functions
export {
  connect,
  disconnect,
  createRecord,
  queryRecords,
  bulkInsert,
  listAllVerbs,
  listAllActors,
  visualizeData,
  aggregateStatements,
  getLRSStats,
  groupStatementsByDate,
  analyzeActivityInteractions,
  getAverageScoreByActivity,
  checkDatabaseHealth,
  backupDatabase,
  restoreDatabaseFromBackup,
  resetDatabase,
  bulkStoreStatements,
  exportStatements,
  importStatements,
  registerNewVerb,
  registerNewActivityType,
  validateStatement,
  checkStatementAgainstProfile,
  interactiveMode,
  generateStatementTemplate,
  searchStatementsByContent,
  listAllObjectTypes,
  visualizeActorProgress,
  setStatementAuthority,
  getMostActiveActors,
  visualizeVerbUsage,
  listAllExtensions,
  getStatementsByDuration,
};
