export interface AverageTime {
  averageSuccessDays: number;
  averageFailureDays: number;
}

export interface AverageResponse {
  successRate: any;
  averageTotalDistanceClimbed: number;
  averageTime: AverageTime;
}
